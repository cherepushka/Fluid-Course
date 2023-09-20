<?php
global $modx;
//Получение категорий материалов
$query = $modx->prepare('SELECT id,pagetitle,alias 
FROM `modx_site_content` 
WHERE isfolder=?
  AND parent=?'
);
$query->execute([1, 24]);
$materialCategories = $query->fetchAll(PDO::FETCH_ASSOC);

//Получение по 3 урока из каждой категории материала
$query = $modx->prepare('
SELECT id,pagetitle,alias,parent 
FROM ( SELECT *, row_number() over (PARTITION BY parent ORDER BY rand()) num 
       FROM `modx_site_content` 
       WHERE isfolder=? 
         AND parent 
                 IN(?,?,?) 
       ) tech 
WHERE num <=?');
$query->execute([0, 83, 65, 41, 3]);
$materialCategoryChilds = $query->fetchAll(PDO::FETCH_ASSOC);

echo '<div class="category_window p-3">
        <h5 style="color: #ff5500">Читайте также:</h5>

        <div class="tplOuter">
            <div class="">';
foreach ($materialCategories as $category) {
    echo '<h6 style="color: #4763D5;">' . $category['pagetitle'] . '</h6>
                <ul class="d-flex flex-column list-unstyled gap-2 ps-5">';
    foreach ($materialCategoryChilds as $child) {
        if ($category['id'] === $child['parent']) {
            echo '<a class="" href=' . $child['alias'] . '>
                        <li class="tpl">' . $child['pagetitle'] . '</li>
                    </a>';
        }
    }
    echo '</ul>';
}
echo '</div>
        </div>

    </div>';