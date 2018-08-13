<template>
  <div class="container form-wrapper"><!-- prvi div -->

      <h1 class="text-center">VueJS Frontend Challenge</h1>
      <form>
        <template v-for="item in items"><!-- drugi div v for -->
          <div class="form-group"><!-- treći div form group -->
            <p v-bind:class="'inp-label col-md-' + item.col"><label>{{ item.label }}</label></p>

            <template v-if="item.component === 'string'">
              <p v-bind:class="'col-md-' + item.col"><input v-model="item.value" type="text" v-bind:placeholder="item.label" class="form-control input-prim"/></p>
            </template>

            <template v-else-if="item.component === 'email'">
              <p v-bind:class="'text-left col-md-' + item.col"><input v-model="item.value" type="email" v-bind:placeholder="item.label" class="form-control input-prim"/></p>
            </template>

            <template v-else-if="item.component === 'radio'">
              <div v-for="option in item.options" v-bind:class="'text-left col-md-' + item.col">
                  <div class="radio-input">
                    <template v-for="(key, val) in option">
                      <input type="radio" v-bind:id="key" v-bind:value="val" v-model="item.value">
                      <label v-bind:for="key">{{key}}</label>
                    </template>
                  </div><br><br>
              </div>
            </template>

            <template v-else-if="item.component === 'select'">
              <div v-bind:class="'text-left col-md-' + item.col">
                <select v-for="option in item.options" v-model="item.value" class="form-control input-prim">
                  <option disabled value="null">Please select one</option>
                  <template v-for="(key, val) in option">
                    <option v-bind:value="key">{{key}}</option>
                  </template>
                </select><br>
              </div>
            </template>

            <template v-else-if="item.component === 'phone'">
              <div v-bind:class="'col-md-' + item.col">
                <template v-for="option in item.options">
                  <div class="phone-wrapper">
                    <template v-for="country in option.ext">
                      <select  v-model="item.value.ext" class="form-control input-prim input-phone-ext">
                        <option disabled value="null">Select</option>
                        <option v-for="x in country">{{x}}</option>
                      </select><br><br><br>
                    </template>
                    <input v-model="item.value.phone" type="text" v-bind:placeholder="item.label" class="form-control input-prim input-phone-num"/>
                  </div>
                </template>
              </div>
            </template>

            <template v-else-if="item.component === 'multi_string'">
              <div v-bind:class="'text-left col-md-' + item.col">
                <div class="phone-wrapper">
                  <input type="text" placeholder="Enter voucher code" class="form-control input-prim" v-model="item.value"/>
                  <button type="button" class="btn btn-plus" v-on:click="addItem()">+</button>
                </div>
                <p><strong>Your vouchers:</strong></p>
                <!-- <template v-for="voucher in item.value"> -->
                <ul class="vouchers">
                  <li>{{item.value}}<button class="btn btn-minus" v-on:click="removeItem()">-</button></li>
                </ul>
              <!-- </template> -->
              </div>
            </template>

            <template v-else>
              <p>Unknown input method</p>
            </template>


          </div> <!-- treći div form group -->
        </template> <!-- drugi div v for -->
        <p class="text-center col-md-12"><button class="btn btn-prim btn-sub" v-on:click.prevent="post">Submit</button></p>
      </form>
      <p class="text-center col-md-12"><button class="btn btn-prim"  v-on:click='show = !show'>Show-hide preview</button></p>
      <div v-show="show" class="text-center col-md-12">
        <h2>Preview</h2>
        <h4>Items</h4>
        <div v-for="(item,index) in items">
          <p> <strong>{{item.name}}</strong>: {{item.value}}</p>
        </div>
        <h4>Requests</h4>
        <div v-for="(val, key) in requests">
          <p><strong>{{key}}</strong>: {{val}}</p>
        </div>
      </div>

  </div><!-- prvi div -->
</template>


<script>/*
  import stringInput from './components/stringInput.vue'
  import emailInput from './components/emailInput.vue'
  import phoneInput from './components/phoneInput.vue'
  import radioInput from './components/radioInput.vue'
  import selectInput from './components/selectInput.vue'
  import multiStringInput from './components/multiStringInput.vue'

  */
  export default {

    data: function() { //data () = data: function()
      return {
        items: [],
        requests: [],
        newCode: "",
        show: false
      }
    },
    // components: {
    //   'string-input': stringInput,
    //   'phone-input': phoneInput,
    //   'email-input': emailInput,
    //   'radio-input': radioInput,
    //   'select-input': selectInput,
    //   'multi_string-input': multiStringInput
    // },
    created() {
      fetch("https://api.myjson.com/bins/k0sbs")
        .then(response => response.json())
        .then((data) => {
          this.items = data;
        }),
        fetch("https://api.myjson.com/bins/11w2l0")
          .then(response => response.json())
          .then((data) => {
            this.requests = data;
          })
    },
    computed: {
        getItem: function() {
          for (var x = 0; x < this.items.length; x++) {
                   var item = this.items[x];
                   //this.models.push(model);
               }
        }
    },
    methods: {
      addItem: function(){
        console.log('button clicked');
        this.items.push({value:this.value});
        this.value = '';
      },

      // this.todo.push({id: Math.floor(Math.random() * 9999) + 10, label: this.newitem, done: false});
      //   this.newitem = '';
      // },
      post: function(val,key){
        this.$http.post('https://fr-chall.firebaseio.com/posts.json', this.items).then(function(data){
          console.log(data);
        });
      }
    }
  }

</script>


<style lang="scss">

/******************** VARIABLES ********************/
@import url('https://fonts.googleapis.com/css?family=Cairo:400,700|Playfair+Display:400,600,700');

$label-color: #fff;
$primary: rgba(188,139,60,1.0);;
$blue: #3765fc;
$purple: #5a4dfd;
$transparent-white: rgba(255,255,255,0.5);
$transparent-primary: rgba(188,139,60,0.5);

@mixin transition($transition) {
    -moz-transition:    $transition;
    -o-transition:      $transition;
    -webkit-transition: $transition;
    transition:         $transition;
}

/******************** GENERAL ********************/
* {
  box-sizing: border-box;
}
body {
  // background: rgb(90,77,253);
  // background: linear-gradient(90deg, rgba(90,77,253,1) 0%, rgba(55,101,252,1) 51%, rgba(77,186,251,1) 100%);
  background-image: url('https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e82ee10fea764ee6186ecee56fb1fe56&auto=format&fit=crop&w=1500&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  color: $label-color;
  font-family: 'Cairo', sans-serif;
  font-size: 12pt;
}

h1, h2, h4 {
  font-family: 'Playfair Display', serif;
}

.form-wrapper {
  border-radius: 50px;
  margin-top: 20px;
  background-color: rgba(71,48,26,0.5);
  width: 70%;
  @media screen and (max-width: 992px) {
    width: 100%;
    margin-top: 0;
    border-radius: 0;
  }
}

.vouchers {
  list-style-type: none;
  text-align: left;
  padding-left: 0;
}
.btn-plus {
  border-radius: 50px;
  color: $label-color;
  background-color: #BCA745;
  &:hover {
    color: $label-color;
    background-color: $transparent-primary;
  }
  @include transition(all 1s);
}

.btn-minus{
  border-radius: 50px;
  color: $label-color;
  background-color: #BC5F45;
  &:hover {
    color: $label-color;
    background-color: $transparent-primary;
  }
  @include transition(all 1s);
}

.btn-prim {
  border-radius: 50px;
  color: $label-color;
  background-color: $primary;
  &:hover {
    color: $label-color;
    background-color: $transparent-primary;
  }
  @include transition(all 1s);
}

.btn-sub {
  margin: 3% 0;
}

.form-control {
  width: 80%;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
}

/******************** FORM ********************/

.inp-label {
  text-align: right;
  font-weight: 600;
  @media screen and (max-width: 992px) {
		text-align: left;
	}
}

.input-prim {
  background-color: $transparent-white;
  border-radius: 50px;
  border: 0;
}

.input-phone-ext {
  width: 30%;
  @media screen and (max-width: 992px) {
    width: 30%;;
  }
}

.input-phone-num {
  width: 50%;
  @media screen and (max-width: 992px) {
    width:70%;;
  }
}

.radio-label {
  margin-right: 20px;
}

.radio-input{
  display: inline;
  input{
    margin-right: 5px;
    display: inline-block;
  }
  label{
    margin-right: 10px;
    display: inline;
    font-weight: 400;
  }
}

.phone-wrapper {
  display: flex;
    justify-content: flex-start;
    align-items: center;
}

#add-voucher {
  display: inline;
  button {
    display: inline;
  }
  input {
    display: inline;
    width: 60%;
  }
}
</style>
