<?php
global $modx;

/**
 * snippet vars: 
 * @var $timestamp int - UNIX timestamp даты, которую нужно форматировать
 * @var $fmt string - формат даты и времени
 * 
 * Example:
 * [[timestamp_fmt_rus_locale? &timestamp=`1688637170` &fmt=`d MMMM`]]
 * Result: 6 июля
 */
if (!extension_loaded('intl')){
    try {
        echo (new DateTimeImmutable($timestamp))->format($fmt);
    } catch (Exception $e) {
        echo '';
        $modx->log(xPdo::LOG_LEVEL_ERROR, '[timestamp_rus_format_MM_DD] ' . $e->getMessage());
    }
    return;
}

$intlFormatter = IntlDateFormatter::create(
    'ru_RU',
    IntlDateFormatter::NONE,
    IntlDateFormatter::NONE,
    null,
    IntlDateFormatter::GREGORIAN,
    $fmt
);
if ($intlFormatter === null){
    $modx->log(xPdo::LOG_LEVEL_ERROR, '[timestamp_rus_format_MM_DD] ' . intl_get_error_message());
    echo '';
    return;
}

echo $intlFormatter->format($timestamp);