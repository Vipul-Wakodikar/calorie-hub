(this["webpackJsonpfood-web"]=this["webpackJsonpfood-web"]||[]).push([[0],{24:function(e,t,c){},4:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(17),i=c.n(a),r=(c(24),c.p,c(4),c(8),c(18),c(3)),o=(c(19),c(44),c(0));function l(e){var t=e.meal,c=Object(n.useState)(""),s=Object(r.a)(c,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){fetch("https://api.spoonacular.com/recipes/".concat(t.id,"/information?apiKey=a60c615ee6064d6e856d775e2c075b59&includeNutrition=false")).then((function(e){return e.json()})).then((function(e){i(e.image)})).catch((function(){console.log("error")}))}),[t.id]),Object(o.jsxs)("article",{children:[Object(o.jsx)("img",{src:a,alt:"recepie"}),Object(o.jsx)("h1",{children:t.title}),Object(o.jsxs)("ul",{className:"instruction",children:[Object(o.jsxs)("li",{children:["Preparation time: ",t.readyInMinutes," minutes"]}),Object(o.jsxs)("li",{children:["Number of servings: ",t.servings]})]}),Object(o.jsx)("a",{href:t.sourceUrl,target:"_blank",children:"Go to Recepie"})]})}function j(e){var t=e.mealData,c=t.nutrients;return Object(o.jsxs)("main",{children:[Object(o.jsxs)("section",{className:"nutrients",children:[Object(o.jsx)("h2",{children:c.title}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["calories: ",c.calories]}),Object(o.jsxs)("li",{children:["protein: ",c.protein]}),Object(o.jsxs)("li",{children:["fat: ",c.fat]}),Object(o.jsxs)("li",{children:["carbohydrates: ",c.carbohydrates]})]})]}),Object(o.jsx)("section",{className:"meals",children:t.meals.map((function(e){return Object(o.jsx)(l,{meal:e},e.id)}))})]})}var u=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(2e3),i=Object(r.a)(a,2),l=i[0],u=i[1],b=Object(n.useState)(""),h=Object(r.a)(b,2),d=h[0],O=h[1],f=Object(n.useState)(!1),p=Object(r.a)(f,2),m=p[0],x=p[1];function g(){O("https://api.spoonacular.com/mealplanner/generate?apiKey=a60c615ee6064d6e856d775e2c075b59&timeFrame=day&veg=".concat(m,"&targetCalories=").concat(l)),fetch(d).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(){console.log("error")}))}return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Welcome to Calorie Hub"}),Object(o.jsxs)("section",{className:"controls",children:[Object(o.jsx)("input",{type:"number",placeholder:"Calories (e.g. 2000)",onChange:function(e){u(e.target.value)},className:"searchInput"}),Object(o.jsx)("button",{onClick:g,children:"Get Daily Meal Plan"}),Object(o.jsx)("input",{type:"checkbox",value:"Only Vegetarian food",onClick:g,checked:m,onChange:function(){x(!m),console.log(m+d)},className:"checkbox-style"}),Object(o.jsx)("label",{children:"Only veg"})]}),c&&Object(o.jsx)(j,{mealData:c})]})};var b=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(u,{})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),h()}},[[46,1,2]]]);
//# sourceMappingURL=main.5f7ce363.chunk.js.map