import Vue from 'vue'
import vueForm from 'vue-form'

var options = {
    validators: {
        'sin-espacios' : function(value){
            return !value.includes(' ')
        }
    }
}

Vue.use(vueForm, options)