window.addEventListener('load', () => {
    SchoolPage.loadSchoolData();
});



class SchoolPage {
    static loadSchoolData() {
        if(!schoolID) return this.schoolNotFound();
        
        fetch('../../../api/school?schoolID=' + schoolID)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(!res) return this.schoolNotFound();
                
                document.getElementById('schoolInfo__name').innerText = res["name"];
                document.getElementById('schoolInfo__photo').src = res["mainPhoto"];
                document.getElementById('schoolInfo__pointsMatura').innerText = res["pointsMatura"];
                document.getElementById('schoolInfo__pointsEWD').innerText = res["pointsEWD"];
                document.getElementById('schoolInfo__city').innerText = res["city"];
                document.getElementById('schoolInfo__voivodeship').innerText = res["voivodeship"];
                document.getElementById('schoolInfo__district').innerText = res["district"];
                document.getElementById('schoolInfo__street').innerText = res["street"];
                
            })
            .catch(err => this.schoolNotFound())
    }
    
    static getSchoolID() {
        return getParameterByName('id');
    }
    
    static schoolNotFound() {
        document.getElementById('schoolInfo').innerHTML = 'Szkoła o podanym linku nie została znaleziona lub wystąpił błąd.';
    }
}

let schoolID = SchoolPage.getSchoolID();
