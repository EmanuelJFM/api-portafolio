class Contact{
    constructor(name,email, subject, content) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.content = content;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
    getSubject() {
        return this.subject;
    }

    setSubject(subject) {
        this.subject = subject;
    }

    getContent() {
        return this.content;
    }

    setContent(content) {
        this.content = content;
    }
}
module.exports = Contact