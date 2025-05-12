function Maid (name,age,permit,languages){

    this.name= name;
        this.age= age;
        this.permit= permit;
        this.languages= languages;
        this.cleaning= function(){
            alert("cleaning in session");
        }
    }