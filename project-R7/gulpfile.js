const { watch } = require('gulp');

const checkChangeFile = (done) => {
   console.log('Файл изменился');

   done();
}; 

const checkAddFile = (done) => {
   console.log('Добавились новые файлы');

   done();
};

const watchers = () => {
   watch('dist/js/*.js', { events: 'change'}, checkChangeFile);
   watch('dist/sass/', { events: 'add'}, checkAddFile);
}

exports.watchers = watchers;