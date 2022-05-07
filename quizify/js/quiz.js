Vue.component('quiz-pane', {
template: `
  <div class="container-fluid">
    <div class="row">
	<run-or-submit></run-or-submit>
        <language-selection></language-selection>
        <div></div>
        <span class="placeholder col-12 bg-light"></span>

    </div>
    <div class="row">
      <question-view></question-view>
      <programming-view></programming-view>
      <execution-view></execution-view>
    </div>
  </div>
`
})

var questionsZahl = Math.floor((Math.random() * (5+1 - 1)) + 1);

if (questionsZahl == 1) {
  Vue.component('question-view', {
    template: `
        <div class="col-md-5">
            <div class="bg-light border rounded-3">
                <question></question>
            </div>
        </div>
    `
    })
} else if (questionsZahl == 2) {
  Vue.component('question-view', {
    template: `
        <div class="col-md-5">
            <div class="bg-light border rounded-3">
                <question1></question1>
            </div>
        </div>
    `
    })
} else if (questionsZahl == 3) {
  Vue.component('question-view', {
    template: `
        <div class="col-md-5">
            <div class="bg-light border rounded-3">
                <question2></question2>
            </div>
        </div>
    `
    })
} else if (questionsZahl == 4) {
  Vue.component('question-view', {
    template: `
        <div class="col-md-5">
            <div class="bg-light border rounded-3">
                <question3></question3>
            </div>
        </div>
    `
    })
} else if (questionsZahl == 5) {
  Vue.component('question-view', {
    template: `
        <div class="col-md-5">
            <div class="bg-light border rounded-3">
                <question4></question4>
            </div>
        </div>
    `
    })
}

/*Vue.component('question-view', {
template: `
    <div class="col-md-5">
        <div class="bg-light border rounded-3">
            <question></question>
        </div>
    </div>
`
})

Vue.component('question-view1', {
template: `
    <div class="col-md-5">
        <div class="bg-light border rounded-3">
            <question1></question1>
        </div>
    </div>
`
})*/

Vue.component('programming-view', {
template: `
        <div class="col-md-4">
            <div class="container bg-light border rounded-3">
                <form-textarea></form-textarea>
            </div>
        </div>

`
})

Vue.component('execution-view', {
template: `
  <div class="col-md-3">
  <div class="bg-light border rounded-3">
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br>

  </div>
  </div>
`
})

Vue.component('run-or-submit', {
template: `
        <div class="col-md-4">
	<div class="row">
	<run-button></run-button>
	<submit-button></submit-button>
	</div>
	</div>
`})

Vue.component('submit-button', {
template: `
	<div class="col-md-6">
	<button type="button" class="btn btn-success">Submit Code</button>
	</div>
`})

/*Vue.component('run-button', {
template: `
        <div class="col-md-6">
        <button type="button" class="btn btn-outline-success">Run Code</button>
	</div>
`})*/

Vue.component('language-selection', {
template: `
    <div class="col-md-5">
    <div class="container-fluid pb-3">
        <div class="row">
            <div class="col-md-6"></div>
            <div class="dropdown col-md-6">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Select Programming Language
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Python3</a></li>
                <li><a class="dropdown-item" href="#">Java</a></li>
              </ul>
            </div>
        </div>
    </div>
    </div>
`})

Vue.component('question', {
    template: `
        <div>
        <question-description></question-description>
        </div>
    `
    })
    
Vue.component('question-description', {
    template: `
    <div>
        <p><strong>Problem Description:</strong></p>
    
        <p>Schreiben sie ein Programm, das unter Angabe von <code>Höhe</code>, <code>Länge</code> und <code>Breite</code> das <code>Volumen</code> ausgibt.</p>
    </div>
    `})

Vue.component('question1', {
    template: `
        <div>
        <question-description1></question-description1>
        </div>
    `
    })
    
Vue.component('question-description1', {
    template: `
    <div>
        <p><strong>Problem Description:</strong></p>
    
        <p>Programmieren Sie einen Algorithmus, welcher einen gegeben <code>Doublewert</code> von <code>Grad Celsius</code> in <code>Grad Kelvin</code> umrechnet.</p>
    </div>
    `})

Vue.component('question2', {
    template: `
        <div>
        <question-description2></question-description2>
        </div>
    `
    })
    
Vue.component('question-description2', {
    template: `
    <div>
        <p><strong>Problem Description:</strong></p>
    
        <p>Programmieren Sie einen Algorithmus, der unter Entgegennahme zweier Integer bestimmen kann, ob der erste Integer die Quadratzahl des zweiten Integers ist.
        Bsp. (4,2) -> True, da 4 Quadratzahl von 2</p>
    </div>
    `})

Vue.component('question3', {
    template: `
        <div>
        <question-description3></question-description3>
        </div>
    `
    })
    
Vue.component('question-description3', {
    template: `
    <div>
        <p><strong>Problem Description:</strong></p>
    
        <p>Schreiben Sie ein Programm, das die Summe aus den einzelnen Werten eines Integer Arrays bildet und ausgibt.</p>
    </div>
    `})

Vue.component('question4', {
    template: `
        <div>
        <question-description4></question-description4>
        </div>
    `
    })
    
Vue.component('question-description4', {
    template: `
    <div>
        <p><strong>Problem Description:</strong></p>
    
        <p>Programmieren Sie einen Algorithmus, der unter Entgegennahme zweier Integer bestimmen kann, ob der erste Integer ein Vielfaches des zweiten Integers ist.
        Bsp. (12,4)-> True, da 12 Vielfaches von 4</p>
    </div>
    `})