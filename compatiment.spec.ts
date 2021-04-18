type Compartiment={ref:string,id:number}
type Nature={id:number,compartiment:string,libelé:number}
type Espece={id:number,libelénature:number,libelé:string}
const compartiments:Compartiment[]=[{ref:"PR",id:1},{ref:"TR",id:2}]
const natures:Nature[]=[{id:1,compartiment:"PR",libelé:12},
                        {id:2,compartiment:"PR",libelé:13},
                        {id:3,compartiment:"PR",libelé:14},
                        {id:4,compartiment:"TR",libelé:121},
                        {id:5,compartiment:"TR",libelé:131},
                        {id:6,compartiment:"TR",libelé:141}]
const especes:Espece[]=[{id:1,libelénature:1,libelé:"champignon22"},
                         {id:2,libelénature:12,libelé:"champignon12"},
                        {id:3,libelénature:14,libelé:"champignon6"},
                        {id:4,libelénature:15,libelé:"champignon5"},
                        {id:5,libelénature:17,libelé:"champignon3"},
                        {id:6,libelénature:131,libelé:"champignon13"},
                        {id:7,libelénature:14,libelé:"champignon11"},
                        {id:8,libelénature:131,libelé:"champignon55"}]

const findNatureCompartiment = (ref: string): Nature[] => {
    return natures.filter(comp => comp.compartiment == ref)
};



const findLibeléEspece = (tr: string): string[] => {
    let result:string[]=[]
    findNatureCompartiment(tr).forEach(nat=>{
        especes.filter(esp=>esp.libelénature===nat.libelé).map(val=>{
            result.push(val.libelé);

        })

    })
    return result
};

describe('test cqrs', function () {
    it('should first compartiment', function () {
        
        expect(compartiments[0].ref).toEqual("PR")
    });
    it('should return code of nature with ref compartiment equal"TR"', () => {
        expect(findNatureCompartiment("TR")).toEqual([{id:4,compartiment:"TR",libelé:121},
            {id:5,compartiment:"TR",libelé:131},
            {id:6,compartiment:"TR",libelé:141}])
    });
    it('should have libelé of especes when choice a compartiment "TR', () => {
        expect(findLibeléEspece("TR")).toEqual(["champignon13","champignon55"])
    });
});
