
# mac: 
#$out_file = "/Users/tejsingh/Desktop/additionData1.txt"
#new-item -itemtype directory -name "js" -path "./addition"

# pc: 
$out_file = ".\addition\js\additionData3.js"
new-item -itemtype directory -name "js" -path ".\addition"

remove-item -path $out_file


"export default [" | add-content $out_file -force


$random_number1 = 0
$random_number2 = 0

$loop_limit1 = 40
$loop_limit2 = 40


$answer = 0
$a_1 = 0
$a_2 = 0
$a_3 = 0
$a_4 = 0

$choice1 = 0
$choice2 = 0
$choice3 = 0

$i = 0

[System.Collections.ArrayList]$array = @()
[System.Collections.ArrayList]$array2 = @()

while ($random_number1 -lt $loop_limit1) {
    $array = @()
    $random_number2 = $random_number1

    while ($random_number2 -lt $loop_limit2) {
        if ($random_number1 -eq $random_number2){
            $currentOrder = 1
        }
        else{
            $currentOrder = 0
        }
            while ($currentOrder -lt 2) {
                $answer = $random_number1 + $random_number2

                $random_add1 = get-random -minimum 1 -maximum 4
                $random_add2 = get-random -minimum 1 -maximum 4
                $random_add3 = get-random -minimum 1 -maximum 4

                $random_sub1 = get-random -minimum 1 -maximum 4
                $random_sub2 = get-random -minimum 1 -maximum 4
                $random_sub3 = get-random -minimum 1 -maximum 4

                while ($random_add2 -eq $random_add1) {
                    $random_add2 = get-random -minimum 1 -maximum 4
                }

                while (($random_add3 -eq $random_add1) -or ($random_add3 -eq $random_add2)) {
                    $random_add3 = get-random -minimum 1 -maximum 4
                }
                
                while ($random_sub2 -eq $random_sub1) {
                    $random_sub2 = get-random -minimum 1 -maximum 4
                }

                while (($random_sub3 -eq $random_sub1) -or ($random_sub3 -eq $random_sub2)) {
                    $random_sub3 = get-random -minimum 1 -maximum 4
                }

                if ((get-random -minimum 0 -maximum 2) -eq 0) {
                    $choice1 = $answer + $random_add1
                }
                else {
                    $choice1 = $answer - $random_sub1
                }

                if ((get-random -minimum 0 -maximum 2) -eq 0) {
                    $choice2 = $answer + $random_add2
                }
                else {
                    $choice2 = $answer - $random_sub2
                }

                if ((get-random -minimum 0 -maximum 2) -eq 0) {
                    $choice3 = $answer + $random_add3
                }
                else {
                    $choice3 = $answer - $random_sub3
                }

                if ($answer -eq 0){
                    $choice1 = 1
                    $choice2 = 2
                    $choice3 = 3
                }
                elseif ($answer -eq 1){
                    $choice1 = 0
                    $choice2 = 2
                    $choice3 = 3
                }
                elseif($answer -eq 2){
                    $choice1 = 0
                    $choice2 = 1
                    $choice3 = 3
                }
                elseif($answer -eq 3){
                    $choice1 = 0
                    $choice2 = 1
                    $choice3 = 2
                }        
                $array = $array + $answer
                $array = $array + $choice1
                $array = $array + $choice2
                $array = $array + $chioce3

                $array = @($answer, $choice1, $choice2, $choice3)
            
                $a_1 = get-random $array.toarray()
                #write-output "random: $a1"
                $array.remove($a_1)
                #$array
            
                $a_2 = get-random $array.toarray()
                #write-output "random: $a1"
                $array.remove($a_2)
                # $array

                $a_3 = get-random $array.toarray()
                #write-output "random: $a1"
                $array.remove($a_3)
                # $array

                $a_4 = get-random $array.toarray()
                #write-output "random: $a1"
                $array.remove($a_4)
                $i = $i + 1
                $array2 = @($a_1, $a_2, $a_3, $a_4)
                $answer_index = $array2.indexof($answer) + 1
                if ($currentOrder -eq 0){
                    if ($random_number2 + 1 -eq $loop_limit2){
                        $similar_str = "[" + $i + ", " + ($i + 1) + ", " + ($i - 1) + ", "+($i - 2) + ", " + ($i - 3) + "]"
                    }
                    elseif($random_number2 -eq $random_number1){
                        $similar_str = "[" + $i + ", " + ($i - 1) + ", " + ($i + 1) + ", " + ($i + 2) + ", " + ($i + 3) + "]"
                    }
                    else{
                        $similar_str = "[" + ($i - 2) + ", " + ($i - 1)  + ", " + $i + ", " + ($i + 1) + ", " + ($i + 2) + "]"
                    }
                    write-output "{
    id: $i,
    question: 'What is $random_number1 + $random_number2 ?',
    answers: ['$a_1','$a_2','$a_3','$a_4'],
    correct: $answer_index,
    similar: $similar_str
}," | out-file -append -filepath $out_file -Encoding ascii
                }
                if ($currentOrder -eq 1){
                    if ($random_number2 + 1 -eq $loop_limit2){
                        $similar_str = "[" + $i + ", " + ($i - 1) + ", " + ($i - 2) + ", "+($i - 3) + ", " + ($i - 4) + "]"
                    }
                    elseif($random_number1 -eq $random_number2){
                        $similar_str = "[" + $i + ", " + ($i + 1) + ", " + ($i + 2) + ", " + ($i + 3) + ", " + ($i + 4) + "]"
                    }
                    else{
                        $similar_str = "[" + ($i - 2) + ", " + ($i - 1)  + ", " + $i + ", " + ($i + 1) + ", " + ($i + 2) + "]"
                    }
                    write-output "{
    id: $i,
    question: 'What is $random_number2 + $random_number1 ?',
    answers: ['$a_1','$a_2','$a_3','$a_4'],
    correct: $answer_index,
    similar: $similar_str      
}," | out-file -append -filepath $out_file -Encoding ascii
                }
                $currentOrder = $currentOrder + 1
            }
            $random_number2 = $random_number2 + 1
    }


    $random_number2 = 0

    

    # $array
    
   

    
    
    #write-output "final array: $array"

    $random_number1 = $random_number1 + 1
    # $random_number2 = $random_number2 + 1
}

"]" | add-content $out_file
