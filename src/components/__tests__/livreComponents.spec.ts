import { describe, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { mount } from '@vue/test-utils'
import livreComponents from '../livreComponents.vue'

describe('livreComponents', () => {
    it('renders properly', () => {
        const pinia = createPinia();
        setActivePinia(pinia);

        const wrapper = mount(livreComponents, { 
            props: { 
                id: 1,
                title: "Livre 1",
                author: "Auteur 1",
                publicationDate: "2021-01-01",
                description: "c'est un test",
            },
            global: {
                plugins: [pinia],
            },
        })

        expect(wrapper.text()).toContain('1')
        expect(wrapper.text()).toContain('Livre 1')
        expect(wrapper.text()).toContain('Auteur 1')
        expect(wrapper.text()).toContain('2021-01-01')
        expect(wrapper.text()).toContain("c'est un test")
    })
})
