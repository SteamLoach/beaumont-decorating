<template>

  <form class="contact-form"
        name="Contact Form"
        data-netlify="true"
        method="post"
        target="hidden_iframe"
        v-on:submit="postSubmit">

    <iframe name="hidden_iframe" 
            id="hidden_iframe" 
            style="display:none;"></iframe>
  
    <h2> {{form.title}} </h2>
    
    <div v-for="field in form.formFields"
         class="form-field">
      <label v-if="form.showLabels.yes"
             :for="field.id"> {{field.label}} </label>
      <input :id="field.id"
             :type="Object.keys(field.type)[0]"
             :required="field.required.yes"
             :placeholder="field.placeholder"
             :name="field.endpoint"
             v-model="formFields[field.id]" />
    </div>
    
    <label class="honeypot"
           for="paranoidandroid" 
           style="display: none;">
      I see you
    </label>
    <input  v-model="honeyPot"
            class="honeypot"
            type="text"
            id="paranoidandroid"
            name="paranoidandroid"
            placeholder="sneaky sneaky"
            style="display: none;"/>
    
    <textarea v-if="form.textArea.yes"
              :required="form.textAreaRequired.yes"
              :placeholder="form.textAreaPlaceholder"
              :name="form.textAreaEndpoint"
              rows="5"
              v-model="formFields.textarea"></textarea>
    
    
    <input type="submit"
           value="Send"
           :disabled="!canSubmit || itsATrap"/>
    
    <div class="submit-success"
         :class="{'is-active': formSuccess}">
      {{form.successMessage}} 
    </div>
    
  
  </form>

</template>


<script>

export default {
  
  props: ['form'],
  
  created() {
    this.form.formFields.forEach(field => {
      if (field.required.yes) {
        this.requiredFields.push(field.id);
      }
    });
    if (this.form.textAreaRequired.yes) {
      this.requiredFields.push('textarea');
    }
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