<template>
    <div>
        <slot name="second">
            <h4>default text</h4>
        </slot>
        <h1>NEW CHILD</h1>
        <slot name="first"><h4>default text</h4></slot>
        
        <slot name="third">
            <h4>default text</h4>
        </slot>
    </div>
</template>
<script>
export default {
    name: "NewChild",
}
</script>