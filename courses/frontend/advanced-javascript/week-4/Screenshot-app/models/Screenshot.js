
class Screenshot {
    constructor(id, url, image, userEmail){
        this.id = id;
        this.url = url;
        this.image = image;
        this.userEmail = userEmail;
    }
    getImage(){
        return this.image;
    }
}

export default Screenshot;