
var company_page = function(req, res, next) {
    var user = req.user;

    if (user !== undefined) {
        user = user.toJSON();
    }

    var requestedCompany = req.params.who;
    
    fakeCompany = {
        name: 'Anlegg & Utemiljø AS',
        description: 'Anlegg & Utemiljø er totalleverandør innen hage og parkanlegg. Firmaet ble stiftet i 1989 og innehar solid erfaring og kompetanse innen faget. Vi bygger uterom for framtida og leverer både store og små anlegg. Vi betjener både private og offentlige kunder som søker innovative og kostnadseffektive løsninger.',
        homepage: 'http://anleggogutemiljo.no/',
        industry: 'Anleggsgartner',
        services: 'Biowall, sedumtak, takhager, regnbed og andre LOD-tiltak, foredrag og undervisning',
        projects: 'Regnbed i Risvollan borettslag, Sedumtak Entra Brattørkaia m. fl.',
        img_name: 'anlegg_og_utemiljoe.png'
    };

    res.render('company', {
        title: 'Ovase.no - Bedriftsside',
        user: user,
        company: fakeCompany
    });
};

// Exports
module.exports.company_page = company_page