var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined,undefined,undefined,{
	'dialect' : 'sqlite',
	'storage' : __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo',{
	description :
	{
		type : Sequelize.STRING,
		allowNULL : false,
		validate :
		{
			len : [1,250]
		}
	},
	completed :
	{
		type : Sequelize.BOOLEAN,
		allowNULL : false,
		defaultValue : false

	}
});
sequelize.sync().then(function()
{
	console.log('everything is synced');
	Todo.findById(3).then(function(todo)
	{
		if (todo)
		{
			console.log(todo.toJSON());
		}
	else
	{
console.log('No todo found');
	}

	});
// 	Todo.create({
// 		description : 'Take out trash',
		
// 	}).then(function(todo){
//  return Todo.create({
// 		description : 'Clean office',
		
// 	});
// 	}).then(function()
// 	{
// 		//return Todo.findById(1);
// 		return Todo.findAll({
// where: {
// 	description : {
// 		$like : '%trash%'
// 	}
// }
// 		});

// 	}).then(function(todos)
// 	{
// 		if(todos)
// 		{
// 			todos.forEach(function(todo)
// 			{
// console.log(todo.toJSON());
// 			})
		
			
// 		}
// 	else
// 	{
// 		console.log('No todo found');
// 	}

// 	}).catch(function(e)
// 	{
// 		console.log(e);
// 	});
});
