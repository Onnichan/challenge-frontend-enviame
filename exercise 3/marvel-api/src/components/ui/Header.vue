<script setup>
    import Logo from '../Logo.vue';
    import Container from '../layout/Container.vue';
</script>
<template>
    <header class="header">
        <nav class="header__nav">
            <a href="#" class="header__nav-img">
                <Logo width="100"></Logo>
            </a>
            <ul class="header__nav-list">
                <li class="header_nav-item">
                    <a href="#" class="header__nav-item link">Example 1</a>
                </li>    
                <li class="header_nav-item">
                    <a href="#" class="header__nav-item link">Example 2</a>
                </li>    
                <li class="header_nav-item">
                    <a href="#" class="header__nav-item link">Example 3</a>
                </li>    
            </ul>
        </nav>
    </header>
</template>
<style scoped>
    .header{
        background-color: var(--bg-header-color);
        color: white;
        padding: 20px var(--px-container);
    }
    .header__nav{
        margin: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .header__nav-list{
        display: flex;
        list-style: none;
        gap: 20px;
    }

    .header__nav-item.link{
        outline: none;
        text-decoration: none;
        color: white;
        font-size: 1.2em;
    }
</style>
