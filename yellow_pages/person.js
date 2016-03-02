
var person_page = function(req, res, next) {
    var user = req.user;

    if (user !== undefined) {
        user = user.toJSON();
    }

    var requestedPerson = req.params.who;
    
    fakePerson = {
        name: 'Arvid Ekle',
        title: 'Daglig leder',
        company: 'Anlegg & Utemiljø AS',
        phonenumber: '73 96 53 13',
        address: 'Eklesspannvegen 80, 7036 Trondheim',
        industry: 'Anleggsgartner',
        workarea: 'Trondheimsregionen',
        img_name: 'ArvidEkle.png'
    };

    res.render('person', {
        title: 'Ovase.no - Personside',
        user: user,
        who: fakePerson
    });
};

// Exports
module.exports.person_page = person_page;