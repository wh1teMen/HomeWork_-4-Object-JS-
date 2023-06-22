var car = {
    manufacturer: "Ауди", //производитель
    model: "R8", //модель
    year_of_release: 2014, //год выпуска
    average_speed: 80, //средняя скорость
    //функция выводин  на экран информацияю об автомобиле
    print_information: function () {
        let result_info = '';
        result_info += `Информация об авто:\n
    Производитель: ${this.manufacturer}
    Модель: ${this.model}
    Год выпуска: ${car['year_of_release']} 
    Средняя скорость: ${car['average_speed']}`;
        return result_info;
    },
    //функция возвращает количесвто времени для преодоления переданного расстояния
    travel_time: function (distance) {
        let result_time = distance / this.average_speed;
        result_time += result_time / 4;
        return `Для преодоления переданной дистанции (${distance}) км,\nпотребуется= ${result_time.toFixed(0)} часов`;
    },
    //функция возвращает количесвто лет, прошедших с момента выпуска автомобиля
    number_of_years: function () {
        let nowDate = new Date();
        let result = nowDate.getFullYear() - this.year_of_release;
        return `С момента выпуска автомобиля прошло ${result} лет`;
    }
};
//информация об авто
alert(car.print_information());
//необходимое время для преодоления, переданной дистанции
alert(car.travel_time(800));
//количесвто лет, прошедших с момента выпуска автомобиля
alert(car.number_of_years());