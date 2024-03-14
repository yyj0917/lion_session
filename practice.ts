type Player = {
    readonly name:string,
    age?: number
}
const playerMaker = (name:string) : Player => ({name})
const nico = playerMaker("nico")
nico.age = 12
nico.name = "las"

type Add = (a:number, b:number) => number; // call signatures 미리 구현해놓은 것. 코드를 줄여주는듯?
const add:Add = (a,b) => a+b