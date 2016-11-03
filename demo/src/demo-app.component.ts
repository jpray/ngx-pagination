import {Component} from "@angular/core";

const hljs = require('highlight.js');
require('!!style!raw!highlight.js/styles/github-gist.css');
require('!!style!raw!sass!./style.scss');

@Component({
    selector: 'demo-app',
    templateUrl: './demo-app.component.html'
})
export class DemoAppComponent {

    meals: string[] = [];
    basicCodeT: string = require('./examples/basic-example.component.html');
    basicCodeC: string = require('!raw!./examples/basic-example.component.ts');
    advancedCodeT: string = require('./examples/advanced-example.component.html');
    advancedCodeC: string = require('!raw!./examples/advanced-example.component.ts');
    customTemplateCodeT: string = require('./examples/custom-template-example.component.html');
    customTemplateCodeC: string = require('!raw!./examples/custom-template-example.component.ts');
    serverPagingCodeT: string = require('./examples/server-example.component.html');
    serverPagingCodeC: string = require('!raw!./examples/server-example.component.ts');
    selectedTab = 'basic';
    basicTab = 'html';
    fullTab = 'html';
    customTab = 'html';
    serverTab = 'html';

    constructor() {
        this.meals = this.generateMeals();
    }

    ngAfterViewInit() {
        this.highlight();
    }

    /**
     * Run highlight.js, giving time for DOM to update.
     */
    private highlight() {
        setTimeout(() => hljs.initHighlighting());
    }

    private generateMeals(): string[] {
        let meals = [];
        const dishes = [
            'noodles',
            'sausage',
            'beans on toast',
            'cheeseburger',
            'battered mars bar',
            'crisp butty',
            'yorkshire pudding',
            'wiener schnitzel',
            'sauerkraut mit ei',
            'salad',
            'onion soup',
            'bak choi',
            'avacado maki'
        ];
        const sides = [
            'with chips',
            'a la king',
            'drizzled with cheese sauce',
            'with a side salad',
            'on toast',
            'with ketchup',
            'on a bed of cabbage',
            'wrapped in streaky bacon',
            'on a stick with cheese',
            'in pitta bread'
        ];
        for (var i = 1; i <= 100; i++) {
            var dish = dishes[Math.floor(Math.random() * dishes.length)];
            var side = sides[Math.floor(Math.random() * sides.length)];
            meals.push('meal ' + i + ': ' + dish + ' ' + side);
        }
        return meals;
    }
}