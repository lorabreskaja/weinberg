<?php			   
function menu($arr){
	echo "<ul>";
	foreach ($arr as $input){

	if (!empty($input['children'])){
	echo "<li>".$input['Home'];
	menu ($input['children']);
	echo "</li>";
	} else {
	echo "<li>".$input['Home']."</li>";
		}
	}
	echo "</ul>"; 
	}
?>