



const Translation = {
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "YO",
    Ж: "ZH",
    З: "Z",
    И: "I",
    Й: "J",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "CH",
    Ш:"SH",
    Ь: "",
    Щ: "SHH",
    Ю: "YU",
    Я: "YA"
  };
  
  const SearchInput = document.querySelector('.SearchInput');
  const SearchButton = document.querySelector('.SearchBtn');
  
  SearchButton.addEventListener('click', function () {
    let SearchInputValue = SearchInput.value;
    let InputValueArr = SearchInputValue.split('');
  
    for (let i = 0; i < InputValueArr.length; i++) {
      let currentChar = InputValueArr[i].toUpperCase(); // Преобразуем символ в верхний регистр
      if (Translation[currentChar]){ // проверяю есть ли такой ключ
        InputValueArr[i] = Translation[currentChar]; // если есть, то обьект массива равен значению из словаря
      }
    }
    
    InputValueArr = InputValueArr.join('');
    console.log(InputValueArr);
    
  });