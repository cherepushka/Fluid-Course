<?php

class Prodamus{
    
    public function __construct(
        private string $linkToForm,
        private string $secretApiKey,
    ){
        $this->linkToForm = rtrim($linkToForm, '\\/');
    }

    public function generatePayLink(PayLinkRequest $request): string
    {
        $data = [
            'do' => $request->getDo(),
            'order_id' => $request->getOrderId(),
            'customer_email' => $request->getCustomerEmail(),
            'urlReturn' => $request->getUrlReturn(),
            'urlSuccess' => $request->getUrlSuccess(),
            'available_payment_methods' => $request->getAvailablePaymentMethods(),
            'sys' => $request->getSys(),
            'paid_content' => 'Спасибо за покупку! После проверки оплаты мы вышлем вам доступ к курсу',
        ];

        // перечень товаров заказа
        foreach($request->getProducts() as $product){
            $data['products'][] = [  
                'name' => $product->getName(),
                'price' => $product->getPrice(),
                'quantity' => $product->getQuantity(),
            ];
        }

        $data['signature'] = Hmac::create($data, $this->secretApiKey);

        return sprintf('%s?%s', $this->linkToForm, http_build_query($data));
    }

    /**
     * Были ли данные, которые пришли на наш эндпоинт успешной оплаты, 
     * действительно отправлены от сервера Prodamus 
     * 
     * @param array $postData - Prodamus отправит нам данные вшитые в ссылку оплаты, в POST. Передаем массив $_POST
     * @param string $signHeaderValue - заголовок `Sign` из запроса
     */
    public function isPaymentResponseCorrect(array $postData, string $signHeaderValue): bool
    {
        return Hmac::verify($postData, $this->secretApiKey, $signHeaderValue);
    }

    /**
     * Получаем наш id заказа
     * 
     * @param $postData array - https://help.prodamus.ru/payform/uvedomleniya
     */
    public function getPaymentId(array $postData): int
    {
        if(!isset($postData['order_num'])){
            throw new \InvalidArgumentException('В заказ отсутсвует \'order_num\'');
        }

        return (int)$postData['order_num'];
    }

    /**
     * Были ли заказ успешно оплачен?
     * 
     * @param $postData array - https://help.prodamus.ru/payform/uvedomleniya
     */
    public function isPaid(array $postData): bool
    {
        if(!isset($postData['payment_status'])){
            throw new \InvalidArgumentException('В заказ отсутсвует \'payment_status\'');
        }

        return $postData['payment_status'] === 'success';
    }

}