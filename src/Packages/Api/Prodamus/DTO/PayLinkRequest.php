<?php

namespace App\Packages\Api\Prodamus\DTO;

use App\Enums\PaymentMethod;

class PayLinkRequest{

    // Документация:
    // https://help.prodamus.ru/payform/integracii/rest-api/instrukcii-dlya-samostoyatelnaya-integracii-servisov
    private string $do = 'pay';
    private string $orderId;
    private string $customerEmail;
    private array $products = [];
    private string $urlReturn = '';
    private string $urlSuccess = '';
    private string $sys = '';
    private string $ref = '';
    private string $availablePaymentMethods;

    public function getDo(): string
    {
        return $this->do;
    }

    public function setOrderId(string $orderId): self
    {
        $this->orderId = $orderId;

        return $this;
    }

    public function getOrderId(): string
    {
        return $this->orderId;
    }

    public function setCustomerEmail(string $customerEmail): self
    {
        $this->customerEmail = $customerEmail;

        return $this;
    }

    public function getCustomerEmail(): string
    {
        return $this->customerEmail;
    }

    public function addProduct(PayLinkRequestProductItem $product): self
    {
        $this->products[] = $product;

        return $this;
    }

    /**
     * @return PayLinkRequestProductItem[]
     */
    public function getProducts(): array
    {
        return $this->products;
    }

    public function setUrlReturn(string $urlReturn): self
    {
        $this->urlReturn = $urlReturn;

        return $this;
    }

    public function getUrlReturn(): string
    {
        return $this->urlReturn;
    }

    public function setUrlSuccess(string $urlSuccess): self
    {
        $this->urlSuccess = $urlSuccess;

        return $this;
    }

    public function getUrlSuccess(): string
    {
        return $this->urlSuccess;
    }

    public function getSys(): string
    {
        return $this->sys;
    }

    public function setRef(string $ref): self
    {
        $this->ref = $ref;

        return $this;
    }

    public function getRef(): string
    {
        return $this->ref;
    }

    public function setAvailablePaymentMethods(PaymentMethod $method): self
    {
        switch($method){
            case PaymentMethod::ONLINE:
                $this->availablePaymentMethods = 'AC|ACkz|ACkztjp|ACf|ACeuruk|ACusduk|SBP|PC|QW|GP|sbol|invoice';
                break;
            case PaymentMethod::INSTALLMENT:
                $this->availablePaymentMethods = 'installment_0_0_3|vsegdada_installment_0_0_4';
                break;
            default:
                throw new \InvalidArgumentException('Неизвестный сопособ оплаты');
        }

        return $this;
    }

    public function getAvailablePaymentMethods(): string
    {
        return $this->availablePaymentMethods;
    }

}