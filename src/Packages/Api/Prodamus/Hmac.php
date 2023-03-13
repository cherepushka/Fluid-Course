<?php

namespace App\Packages\Api\Prodamus;

class Hmac{

    /**
     * Генерируем hmac для дальнейшего подтверждения callback об успешной оплате
     * 
     * @param $data array - данные, отправленные в Prodamus для составления ссылки на оплату
     * @param $key string - секретный ключ к Api Prodamus
     * 
     * @return string
     */
    public static function create(array $data, string $key): string
    {
        array_walk_recursive($data, function(&$v){
            $v = strval($v);
        });

        self::_sort($data);
    
        $data = json_encode($data, JSON_UNESCAPED_UNICODE);

        return hash_hmac('sha256', $data, $key);
    }
 
    /**
     * Проверка hmac от данных с callback`а сервиса оплаты
     * 
     * @param $data array - данные, отправленные в Prodamus для составления ссылки на оплату
     * @param $key string - секретный ключ к Api Prodamus
     * @param $sign string - hmac из заголовков запроса
     * 
     * @return string
     */
    public static function verify(array $data, string $key, string $sign): bool
    {
        $_sign = self::create($data, $key);
        
        return ($_sign && (strtolower($_sign) == strtolower($sign)));
    }
 
    private static function _sort(&$data): void
    {
        ksort($data, SORT_REGULAR);
        foreach ($data as &$arr){
            is_array($arr) && self::_sort($arr);
        }
    }
}
