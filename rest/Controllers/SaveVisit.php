<?php

use Google\Cloud\BigQuery\BigQueryClient;
use Google\Cloud\BigQuery\Dataset;
use MODX\Revolution\Rest\modRestController;
use MODX\Revolution\Rest\modRestServiceRequest;
use \MODX\Revolution\modX;

class MyControllerSaveVisit extends modRestController{

    private Dataset $dataset;
    private string $projectId = 'peak-age-279206';
    private string $keyFilePath = MODX_ROOT_PATH . '/credentials/google/peak-age-279206.json';
    private string $datasetId = 'googleDataStuidio';

    public function __construct(modX $modx, modRestServiceRequest $request, array $config = [])
    {
        parent::__construct($modx, $request, $config);

        $this->dataset = (new BigQueryClient([
            "projectId" => $this->projectId,
            "keyFilePath" => $this->keyFilePath,
        ]))->dataset($this->datasetId);
    }

    /**
     * @throws Exception
     */
    public function post(): void
    {
        $reqParams = $this->request->parameters;

        $visitor = [
            'REMOTE_ADDR'           => $_SERVER["REMOTE_ADDR"] ?? null,
            'HTTP_USER_AGENT'       => $_SERVER['HTTP_USER_AGENT'] ?? null,
            'SCREEN'                => $reqParams['SCREEN'] ?? null,
            'URL'                   => $reqParams['URL'] ?? null,
            'HTTP_REFERER'          => $reqParams['HTTP_REFERER'] ?? null,
            'DATETIME_MSC_TZ'       => (new DateTimeImmutable('now', new DateTimeZone('Europe/Moscow')))->format('Y-m-d H:i:s'),
            'YM_UID'                => $reqParams['YM_UID'] ?? null,
            'YM_YCLID'              => $reqParams['YM_YCLID'] ?? null,
            'MAX_SCROLL_PERCENTS'   => $reqParams['MAX_SCROLL_PERCENTS'] ?? null,
        ];

        $table = $this->dataset->table('FL-course-visitors');

        $table->insertRows([[
            'insertId' => '',
            'data' => $visitor
        ]]);
    }
}