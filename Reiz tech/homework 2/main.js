//create estructure of the object
class Tree{
    //constructor of the class with the data of the same
    constructor(name,parent=null,children=[]){
        this.name=name;
        this.parent=parent;
        this.children=children;
    }
    //method to create the branches to create the estructure
    addNewBranch(name){
        const newChild= new Tree(name)
        newChild.parent=this
        this.children.push(newChild)
        return newChild
    }
}
//here i create the branchs of the structure, basing each branch on its parent
// branch root , here create a new object Tree and thats the level 1
const node1= new Tree("node1")
//branch level 2
const node2= node1.addNewBranch("node2")
const node2_1=node1.addNewBranch("node2.1")
//branch level 3
const node3=node2.addNewBranch("node3")
const node3_1=node2_1.addNewBranch("node3_1")
const node3_2=node2_1.addNewBranch("node3_2")
const node3_3=node2_1.addNewBranch("node3_3")
//branch  level 4
const node4=node3_1.addNewBranch("node4")
const node4_1=node3_2.addNewBranch("node4_1")
const node4_2=node3_2.addNewBranch("node4_2")
//branch level 5
const node5= node4_1.addNewBranch("node5")



/*once i got the structure created i use a function getDepth to traverse the structure of the object
we set a variable who will let us now the depth default to 0 and, for each children that the branch root will have, 
 it will return us a iteraction and will add 1 to that variable.
 Also, inside that function we need to create other one that wont let us get more of that the real depth.*/
getDepth = function (node1) {
  
    var depth = 0;
    if (node1.children) {
        node1.children.forEach(function (d) {
            var tmpDepth = getDepth(d)
            if (tmpDepth > depth) {
                depth = tmpDepth
            }
        })
    }
    return 1 + depth
}
console.log(getDepth(node1))