
class Schools {
    
    static getList(callback) {
        fetch('../../../api/schools')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(callback) callback(res);
            })
            .catch(err => console.log(err))
    }
    
    static loadList() {
        this.clearList();
        this.getList( (schools) => {
            for (let i = 0; i < schools.length; i++) {
                document.getElementById('schoolList').innerHTML += `
                    <div class="schoolList__element">
                        <img class="img img--full" src="${schools[i]["mainPhoto"]}">
                        <h3>${schools[i]["name"]}</h3>
                        <p><b>${schools[i]["city"]}</b>, ${schools[i]["district"]}</p>
                        
                        <div class="school__rating school__rating--green">${schools[i]["points_matura"]} <span>matura</span></div>
                        <div class="school__rating school__rating--orange">${schools[i]["points_ewd"]} <span>EWD</span></div>
                    </div>
                `
            }
        });
    }
    
    static clearList() {
        document.getElementById('schoolList').innerHTML = "";
    }
    
}
