/**
 * DIALOG
 * CHARACTER
 * TEXTS
 * GAMBAR
 * INDICATOR->TAU KALO SETELAHNYA QUIZ?
 */

class Dialog {
    constructor(character, texts, images){
        this.character = character;
        this.texts = texts,
        this.images = images;
        this.indicator = false;
    }

    nextPageQuiz(){
        this.indicator = true;
    }
    // nextDialog(){

    // }
    
}

// {
//     "Ibu guru": Selamat pagi anak2
// "Budi" : Selamat pagi bu!
// "Ibu guru":  Kita akan memulai kelas hari ini dengan perkenalan dulu ya, mulai dari kamu.
// 'Budi': Saya Budi ibu.

// }