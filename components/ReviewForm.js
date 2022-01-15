app.component('review-form', {
    template: 
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>
    <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit">
    <p>Would you recommend this product?</p>
    <div>
        <input type="radio" id="yes" name="rec" v-model="recommended" value=true checked>
        <label for="yes">Yes</label>
    </div>
    <div>
        <input type="radio" id="no" name="rec" v-model="recommended" value=false>
        <label for="no">No</label>
    </div>
    </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommended: null,
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || !this.rating) {
                alert('You need to fill out every field in the review form')
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommended: this.recommended
            }
            console.log(this.recommended)
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
            this.recommended = null
        }
    }
})