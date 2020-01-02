<template>

  <form v-editable="form"
        data-netlify="true"
        class="contact-form"
        :name="form.form_name"
        data-netlify-honeypot="bot-field"
        method="post"
        target="hidden_iframe"
        v-on:submit="postSubmit">
    
    
    <!-- Same Page Target -->
    <iframe name="hidden_iframe" 
            id="hidden_iframe" 
            style="display:none;"></iframe>
    <!-- End Same Page Target -->
    
    
    <h2> {{form.title}} </h2>
    
    
    <!-- Netlify Form Name Prop -->
    <input type="hidden" name="form-name" :value="form.form_name" />
    <!-- -->
    
    
    <!-- Form Fields -->
    <div v-for="field in form.form_fields"
         v-editable="field"
         class="form-field">
      <label v-if="form.show_labels.true"
             :for="field.id"> {{field.label}} </label>
      
      <textarea v-if="field.type === 'textarea'"
              :required="field.required.true"
              :placeholder="field.placeholder"
              :name="field.name"
              rows="5"
              v-model="formFields[field.id]"></textarea>
      
      <input v-else
             :id="field.id"
             :type="field.type"
             :required="field.required.true"
             :placeholder="field.placeholder"
             :name="field.name"
             v-model="formFields[field.id]" />
    </div>
    <!-- End Form Fields -->
        
    
    <!-- Bot Field -->
    <input  v-model="honeyPot"
            class="honeypot"
            name="bot-field"
            type="text"
            id="paranoidandroid"
            placeholder="sneaky sneaky"
            style="display: none;"/>
    <!-- End Bot Field -->
    
    
    <!-- Submit Button -->
    <input type="submit"
           value="Send"
           :disabled="!canSubmit || itsATrap"/>
    <!-- End Submit Button -->
    
    
    <!-- Same Page Success Message -->
    <div class="submit-success"
         :class="{'is-active': formSuccess}">
      {{form.success_message}} 
    </div>
    <!-- End Same Page Success Message -->
    
  
  </form>

</template>


<script>

export default {
  
  props: ['form'],
  
  created() {
    this.form.form_fields.forEach(field => {
      if (field.required) {
        this.requiredFields.push(field.id);
      }
    });
  },
  
  data() {
    return {
      honeyPot: '',
      formSuccess: false,
      formFields: {},
      requiredFields: [],
    }
  },
  
  computed: {
    itsATrap: function() {
      return this.honeyPot !== '';
    },
    canSubmit: function() {
      let result = true;
      this.requiredFields.forEach(field => {
        if (!this.formFields[field]) {
          result = false;
        }
      });
      return result;
    }
  },
  
  methods: {
    submitSuccess: function() {
      Object.keys(this.formFields).forEach(field => {
        this.formFields[field] = '';
        this.formSuccess = true;
      }); 
    },
    postSubmit: function() {
      setTimeout(this.submitSuccess, 1000);
    },
  }
}

</script>


<style lang="scss">

  .contact-form {
    @include card($medium-card...);
    @include column-scale(
      $default: 24,
      $on-phablet: 22,
      $on-tablet: 18,
      $on-laptop: 16,
      $on-desktop: 14,
    );
    
    /*
    @include margin-scale(
      top,
      $default: $outer-space-light,
      $on-tablet: $outer-space-medium,
      $on-laptop: $outer-space-heavy
    );
    */
    
    label,
    input {
      width: 100%;
    }
    
    input, textarea {
      background-color: $page-background;
      border-bottom: 2px solid $shade-base;
      
      &:placeholder-shown {font-style: italic;}
      &:not(:placeholder-shown),
      &:focus {
        border-bottom: $standard-border;
        }
      
    }
    
    input[type="submit"] {
      padding: $space-lighter;
      border: $standard-border;
      &:hover {
        cursor: pointer;
        color: $offset-font-color;
        background-color: $brand-1;
      }
      &:disabled {
        cursor: not-allowed;
        color: $shade-light;
        border: 2px solid $shade-light;
        &:hover {
          background-color: transparent;
        }
      }
    }
  }
  
  .submit-success {
    overflow: hidden;
    @include container(center, center);
    height: 0rem;
    text-align: center;
    color: darkgreen;
    font-weight: 600;
    @include standard-transition(all);
    cursor: default;
    
    &.is-active {
      height: 3rem;
      @include y-margin($space-light);
      border: 2px solid darkgreen;
    }
  }

</style>