// Application
App = Ember.Application.create({
	ready: function (){
			// Ember.$('.preloader').hide();
		}
});

App.SearchTextField = Ember.TextField.extend({
	insertNewline: function (){
		App.studentController.loadStudents();
	}
});

/**************************
* Routes
**************************/

App.Router.map(function(){
	this.route("dashboard", {path: "/"});
});

/**************************
* Models
**************************/
App.Student = DS.Model.extend({
	avatar: DS.attr('string'),
	name: DS.attr('string'),
	batch: DS.attr('date'),
	sex: DS.attr('string')
});

/**************************
* Views
**************************/

/**************************
* Controllers
**************************/
App.studentController = Ember.ArrayController.create({
	content: [],
	name: '',
	loadStudents: function(){
		var stud = this;
		var name = stud.get("name");
		alert(name);
		// TODO: Redirect to search page
	}
});

App.recentStudentController = Ember.ArrayController.create({
	content: [],
	addUser: function(name){
		if (this.contains(name)) this.removeObject(name);
		this.pushObject(name);
	},
	removeObject: function(view){
		this.removeObject(view.context);
	},
	searchAgain: function(view){
		App.studentController.set('name', view.context);
		App.studentController.loadStudents();
	},
	reverse: function(){
		return this.toArray().reverse();
	}.property('@each')
});