const fs=require('fs'),path=require('path');
const target=path.join(__dirname,'dist');fs.mkdirSync(target,{recursive:true});
for(const name of fs.readdirSync(__dirname)){if(/\.(html|css|js|jpg)$/.test(name))fs.copyFileSync(path.join(__dirname,name),path.join(target,name));}
console.log('Build pronto em dist/. Site estático, sem chaves ou backend.');
