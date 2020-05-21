$(function() {

    var data = {
        lastID: 0,
        pizzas: []
    };


    var octopus = {
        addPizza: function() {
            var thisID = ++data.lastID; //increases the amount of pizzas

            data.pizzas.push({ //push the number of pizzas into the pizzas array
                id: thisID,
                visible: true
            });
            view.render(); //tells to render (update)
        },

        removePizza: function(pizza) {
            var clickedPizza = data.pizzas[ pizza.id - 1 ]; //removes the pizza it was called
            clickedPizza.visible = false;
            view.render();//tells to render (update)
        },

        getVisiblePizzas: function() {
            var visiblePizzas = data.pizzas.filter(function(pizza) {
                return pizza.visible;
            });
            return visiblePizzas;
        },

        init: function() {
            view.init();
        }
    };


    var view = {
        init: function() {
            var addPizzaBtn = $('.add-pizza');
            addPizzaBtn.click(function() {
                octopus.addPizza();
            });

            // grab elements and html for using in the render function
            this.$pizzaList = $('.pizza-list');
            this.pizzaTemplate = $('script[data-template="pizza"]').html();

            // Delegated event to listen for removal clicks
            this.$pizzaList.on('click', '.remove-pizza', function(e) {
                var pizza = $(this).parents('.pizza').data();
                octopus.removePizza(pizza);
                return false;
            });

            this.render();
        },

        render: function() {
            // Cache vars for use in forEach() callback (performance)
            var $pizzaList = this.$pizzaList,
                pizzaTemplate = this.pizzaTemplate;

            // Clear and render
            $pizzaList.html('');
            octopus.getVisiblePizzas().forEach(function(pizza) {
                // Replace template markers with data
                var thisTemplate = pizzaTemplate.replace(/{{id}}/g, pizza.id);
                $pizzaList.append(thisTemplate);
            });
        }
    };

    octopus.init();
}());