app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3> Reviews: </h3>
    <ul v-for="(review, index) in reviews" :key="index">
        <li> {{review.name}} gave a review of {{review.rating}} stars </li>
        <br />
        "{{review.review}}"
        <br />
        {{review.recommended}}
        "{{ review.name }} would {{ review.recommended === 'true' ? '' : 'not'}} recommend this product"
    </ul>
    </div>
    `,
    
})