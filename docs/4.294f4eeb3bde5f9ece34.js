(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{zQoE:function(t,n,o){"use strict";o.r(n),o.d(n,"AddDogModule",(function(){return h}));var e=o("ofXK"),i=o("tyNb"),r=o("3Pt+"),a=o("nYR2"),d=o("fXoL"),c=o("Vaw3"),b=o("8ifR");function s(t,n){1&t&&(d.Lb(0,"div",11),d.fc(1," Title is mandatory "),d.Kb())}function m(t,n){1&t&&(d.Lb(0,"div",11),d.fc(1," Description is mandatory "),d.Kb())}function g(t,n){if(1&t&&(d.Lb(0,"div",12),d.Jb(1,"img",13),d.Kb()),2&t){const t=n.$implicit;d.yb(1),d.Wb("src",t,d.bc)}}const u=function(t){return{"border-danger":t}},p=[{path:"",component:(()=>{class t{constructor(t){this.afStorage=t,this.addDogForm=new r.d({name:new r.b("",[r.j.required]),description:new r.b("",[r.j.required])})}ngOnInit(){}upload(t){return n=this,void 0,e=function*(){const n=t.target.files[0],o=Math.random().toString(36).substring(2),e=this.afStorage.ref(o);this.afStorage.upload(o,n).snapshotChanges().pipe(Object(a.a)(()=>this.downloadURL=e.getDownloadURL())).subscribe()},new((o=void 0)||(o=Promise))((function(t,i){function r(t){try{d(e.next(t))}catch(n){i(n)}}function a(t){try{d(e.throw(t))}catch(n){i(n)}}function d(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,a)}d((e=e.apply(n,[])).next())}));var n,o,e}onSubmitForm(){}}return t.\u0275fac=function(n){return new(n||t)(d.Ib(c.a))},t.\u0275cmp=d.Cb({type:t,selectors:[["app-add-dog"]],decls:21,vars:13,consts:[[1,"container","text-white"],[1,"main-container","mx-auto","mt-5"],[1,"my-4"],[3,"formGroup","ngSubmit"],["type","text","placeholder","Name","formControlName","name",1,"input-form","col-12",3,"ngClass"],["class","text-left mb-2 ml-2 validators",4,"ngIf"],["rows","3","placeholder","Description","formControlName","description",1,"input-form","col-12",3,"ngClass"],["type","file","accept",".png,.jpg",3,"change"],["class","img-preview mt-3",4,"ngIf"],[1,"mt-3","text-right"],["type","submit",1,"px-4","py-2",3,"disabled"],[1,"text-left","mb-2","ml-2","validators"],[1,"img-preview","mt-3"],[1,"img-fluid",3,"src"]],template:function(t,n){1&t&&(d.Lb(0,"div",0),d.Jb(1,"navbar"),d.Lb(2,"div",1),d.Lb(3,"div"),d.fc(4,"TODO"),d.Kb(),d.Lb(5,"h1",2),d.fc(6,"Add a dog"),d.Kb(),d.Lb(7,"form",3),d.Rb("ngSubmit",(function(){return n.addDogForm.valid&&n.onSubmitForm()})),d.Lb(8,"div"),d.Jb(9,"input",4),d.Kb(),d.dc(10,s,2,0,"div",5),d.Lb(11,"div"),d.Lb(12,"textarea",6),d.fc(13,"        "),d.Kb(),d.Kb(),d.dc(14,m,2,0,"div",5),d.Lb(15,"input",7),d.Rb("change",(function(t){return n.upload(t)})),d.Kb(),d.dc(16,g,2,1,"div",8),d.Ub(17,"async"),d.Lb(18,"div",9),d.Lb(19,"button",10),d.fc(20," Add "),d.Kb(),d.Kb(),d.Kb(),d.Kb(),d.Kb()),2&t&&(d.yb(7),d.Wb("formGroup",n.addDogForm),d.yb(2),d.Wb("ngClass",d.Yb(9,u,n.addDogForm.get("name").touched&&n.addDogForm.get("name").errors)),d.yb(1),d.Wb("ngIf",n.addDogForm.get("name").touched&&n.addDogForm.get("name").errors),d.yb(2),d.Wb("ngClass",d.Yb(11,u,n.addDogForm.get("description").touched&&n.addDogForm.get("description").errors)),d.yb(2),d.Wb("ngIf",n.addDogForm.get("description").touched&&n.addDogForm.get("description").errors),d.yb(2),d.Wb("ngIf",d.Vb(17,7,n.downloadURL)),d.yb(3),d.Wb("disabled",n.isLoading))},directives:[b.a,r.k,r.h,r.e,r.a,r.g,r.c,e.i,e.k],pipes:[e.b],styles:[".input-form[_ngcontent-%COMP%]{margin:5px auto;border:0;padding:10px;border-radius:5px;font-family:Montserrat,sans-serif;outline:none}.container[_ngcontent-%COMP%]{min-height:100vh}.img-preview[_ngcontent-%COMP%]{height:200px;width:300px}.img-fluid[_ngcontent-%COMP%], .img-preview[_ngcontent-%COMP%]{max-height:200px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(n){return new(n||t)},imports:[[i.c.forChild(p)],i.c]}),t})();var l=o("PCNd");let h=(()=>{class t{}return t.\u0275mod=d.Gb({type:t}),t.\u0275inj=d.Fb({factory:function(n){return new(n||t)},imports:[[e.c,f,r.f,r.i,l.a]]}),t})()}}]);