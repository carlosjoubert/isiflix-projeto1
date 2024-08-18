export class Post {
    public userId: number;
    public id: number;
    public title: string;
    public body: string;
    
    public constructor(){
        this.userId=0;
        this.id=0;
        this.title="";
        this.body="";
    }
}