import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogsBlogModule } from './blog/blog.module';
import { BlogsEntryModule } from './entry/entry.module';
import { BlogsTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BlogsBlogModule,
        BlogsEntryModule,
        BlogsTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogsEntityModule {}
