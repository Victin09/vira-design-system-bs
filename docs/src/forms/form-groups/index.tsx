import React from 'react';
import Head from 'next/head';
import { withLayout } from '@moxy/next-layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { DefaultLayout } from '../../../layouts/default';
import { toc } from './toc';
import { PAGE_TITLE_PREFIX } from '../../../constants';

export const FormGroupsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <Head>
                <title>{PAGE_TITLE_PREFIX} Form Groups</title>
            </Head>
            <div>
                <section className="padtop" id="form-groups">
                    <div className="content">
                        <Headline title="Form Groups" link="#form-groups" />
                        <div className="divider"></div>

                        <p>
                            Vira Design System allows you to bundle input fields in form groups with other components such as
                            buttons, dropdown menus, or labels using the <code>form-group</code> class. This adds some
                            unique styling to the elements creating a unified design when combining these components
                            together.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="basics">
                    <div className="content">
                        <Headline title="Basics" link="#basics" size="4" />
                        <div className="divider"></div>

                        <p>
                            Form groups come with their own set of helper classes that adds the grouping behavior to the
                            corresponding supported elements: <code>form-group-btn</code>, <code>form-group-input</code>
                            , and <code>form-group-label</code>.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="search" className="form-group-input" placeholder="Search" />
                                    <button className="form-group-btn">Go</button>
                                </div>
                                <div className="form-group">
                                    <label className="form-group-label">$</label>
                                    <input
                                        type="number"
                                        className="form-group-input"
                                        placeholder="How much would you like to donate?"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="form-group">
    <input type="search" class="form-group-input" placeholder="Search"/>
    <button class="form-group-btn">Go</button>
</div>
<div class="form-group">
    <label class="form-group-label">$</label>
    <input type="number" class="form-group-input" placeholder="How much would you like to donate?"/>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p>
                            To display controls like buttons and labels on the right side, just place that component
                            last.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="number" className="form-group-input" placeholder="How about now?" />
                                    <label className="form-group-label">$</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <CodeBlock
                                    code={`<div class="form-group">
    <input type="number" class="form-group-input" placeholder="How about now?"/>
    <label class="form-group-label">$</label>
</div>`}
                                    language="htmlbars"
                                />
                            </div>
                        </div>
                        <div className="space"></div>

                        <p>
                            You can also use a <code>select</code> within a <code>form-group</code>.
                        </p>

                        <div className="form-group">
                            <label className="form-group-label">github.com/</label>
                            <select className="form-group-input w-100p" placeholder="Choose one">
                                <option value="">Select one</option>
                                <option value="option-1">Option 1</option>
                                <option value="option-2">Option 2</option>
                                <option value="option-3">Option 3</option>
                            </select>
                            <button className="form-group-btn btn-primary">Go</button>
                        </div>
                        <CodeBlock
                            code={`<div class="form-group">
    <label class="form-group-label">github.com/</label>
    <select class="form-group-input w-100p" placeholder="Choose one">
        <option value="">Select one</option>
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
        <option value="option-3">Option 3</option>
    </select>
    <button class="form-group-btn btn-primary">Go</button>
</div>
`}
                            language="htmlbars"
                        />
                        <div className="space space--lg"></div>

                        <p>You can also attach a bunch of these controls together.</p>
                        <div className="form-group">
                            <label className="form-group-label">Dimensions</label>
                            <input type="text" className="form-group-input" placeholder="Width" />
                            <input type="text" className="form-group-input" placeholder="Height" />
                            <button className="form-group-btn">Clear</button>
                            <button className="form-group-btn btn-primary">Submit</button>
                        </div>
                        <CodeBlock
                            code={`<div class="form-group">
    <label class="form-group-label">Dimensions</label><input type="text" class="form-group-input" placeholder="Width" /><input type="text" class="form-group-input" placeholder="Height" /><button class="form-group-btn">Clear</button>
    <button class="form-group-btn btn-primary">Submit</button>
</div>
`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="sizes">
                    <div className="content">
                        <Headline title="Sizes" link="#sizes" size="4" />
                        <div className="divider"></div>
                        <p>
                            And of course, more controls can be combined with each other with different sizes. To make
                            things easier, Vira Design System is designed to make components to fit with other same sized controls.
                            For instance, any <code>*-small</code> class matches with all components that have the{' '}
                            <code>small</code> class.
                        </p>
                        <div className="form-group">
                            <label className="form-group-label label--xs">github.com/</label>
                            <input type="text" className="form-group-input input--xs" placeholder="Extra Small" />
                            <button className="form-group-btn btn-primary btn--xs">Go</button>
                        </div>
                        <div className="form-group">
                            <label className="form-group-label label--sm">github.com/</label>
                            <input type="text" className="form-group-input input--sm" placeholder="Small" />
                            <button className="form-group-btn btn-primary btn--sm">Go</button>
                        </div>
                        <div className="form-group">
                            <label className="form-group-label">github.com/</label>
                            <input type="text" className="form-group-input" placeholder="Normal" />
                            <button className="btn-primary form-group-btn">Go</button>
                        </div>
                        <div className="form-group">
                            <label className="form-group-label label--lg">github.com/</label>
                            <input type="text" className="form-group-input input--lg" placeholder="Large" />
                            <button className="form-group-btn btn-primary btn--lg">Go</button>
                        </div>
                        <div className="form-group">
                            <label className="form-group-label label--xl">github.com/</label>
                            <input type="text" className="form-group-input input--xl" placeholder="Extra Large" />
                            <button className="form-group-btn btn-primary btn--xl">Go</button>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="form-group">
    <label class="form-group-label label--xs">github.com/</label>
    <input type="text" class="form-group-input input--xs" placeholder="Extra Small">
    <button class="form-group-btn btn-primary btn--xs">Go</button>
</div>
<div class="form-group">
    <label class="form-group-label label--sm">github.com/</label>
    <input type="text" class="form-group-input input--sm" placeholder="Small">
    <button class="form-group-btn btn-primary btn--sm">Go</button>
</div>
<div class="form-group">
    <label class="form-group-label">github.com/</label>
    <input type="text" class="form-group-input" placeholder="Normal">
    <button class="btn-primary form-group-btn">Go</button>
</div>
<div class="form-group">
    <label class="form-group-label label--lg">github.com/</label>
    <input type="text" class="form-group-input input--lg" placeholder="Large">
    <button class="form-group-btn btn-primary btn--lg">Go</button>
</div>
<div class="form-group">
    <label class="form-group-label label--xl">github.com/</label>
    <input type="text" class="form-group-input input--xl" placeholder="Extra Large">
    <button class="form-group-btn btn-primary btn--xl">Go</button>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <section className="padtop" id="example">
                    <div className="content">
                        <Headline title="Example" link="#example" size="4" />
                        <div className="divider"></div>
                        <p>Below is an example form that uses a bunch of different fields together.</p>

                        <div className="u-no-padding">
                            <div className="mb-1">
                                <label className="font-bold">Contact</label>
                                <div className="section-body row">
                                    <div className="col-6 pl-0">
                                        <div className="input-control">
                                            <input
                                                className="input-contains-icon input-contains-icon input-contains-icon-left"
                                                type="text"
                                                placeholder="Name"
                                            />
                                            <span className="icon icon-left">
                                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'user']} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-0">
                                        <div className="input-control">
                                            <input
                                                className="input-contains-icon input-contains-icon-left input-contains-icon-right text-success input-success"
                                                type="text"
                                                placeholder="Email"
                                                defaultValue="somebodyoncetoldme@gmail.com"
                                            />
                                            <span className="icon icon-left">
                                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'envelope']} />
                                            </span>
                                            <span className="icon icon-right">
                                                <FontAwesomeIcon className="fa-wrapper" icon={['fas', 'check']} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-1">
                                <label className="font-bold">
                                    Phone <span className="info inline font-light">We are not telemarketers.</span>
                                </label>
                                <div className="section-body">
                                    <div className="form-group">
                                        <label className="form-group-label">+1</label>
                                        <input
                                            type="text"
                                            className="form-group-input"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-1 col-6 pl-0">
                                    <label className="font-bold">Choose One</label>
                                    <select className="select" placeholder="Choose one">
                                        <option>Shibe</option>
                                        <option>Doggo</option>
                                        <option>Pupper</option>
                                    </select>
                                </div>
                                <div className="mb-1 col-6 pr-0">
                                    <label className="font-bold label--sm">
                                        Select One <span className="required">*</span>
                                    </label>
                                    <div className="section-body">
                                        <div className="u-flex">
                                            <div className="form-ext-control form-ext-radio m-0">
                                                <input
                                                    id="radio-1"
                                                    name="member"
                                                    className="form-ext-input"
                                                    type="radio"
                                                />
                                                <label className="form-ext-label" htmlFor="radio-1">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-ext-control form-ext-radio m-0">
                                                <input
                                                    id="radio-2"
                                                    name="member"
                                                    className="form-ext-input"
                                                    type="radio"
                                                />
                                                <label className="form-ext-label" htmlFor="radio-2">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="required info">This section is required.</span>
                                </div>
                            </div>
                            <div className="mb-1">
                                <label className="font-bold">Message</label>
                                <textarea placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                        <div className="space"></div>
                        <CodeBlock
                            code={`<div class="mb-1">
    <label class="font-bold">Contact</label>
    <div class="section-body row">
        <div class="col-6 pl-0">
            <div class="input-control">
                <input class="input-contains-icon input-contains-icon input-contains-icon-left" type="text" placeholder="Name" />
                <span class="icon icon-left"><i class="fa fa-wrapper fa-user" aria-hidden="true"></i></span>
            </div>
        </div>
        <div class="col-6 pr-0">
            <div class="input-control">
                <input class="input-contains-icon input-contains-icon-left input-contains-icon-right text-success input-success" type="text" placeholder="Email" value="somebodyoncetoldme@gmail.com" />
                <span class="icon icon-left"><i class="fa fa-wrapper fa-envelope" aria-hidden="true"></i></span>
                <span class="icon icon-right"><i class="fa fa-wrapper fa-check" aria-hidden="true"></i></span>
            </div>
        </div>
    </div>
</div>
<div class="mb-1">
    <label class="font-bold">Phone <span class="info inline font-light">We are not telemarketers.</span></label>
    <div class="section-body">
        <div class="form-group">
            <label class="form-group-label">+1</label>
            <input type="text" class="form-group-input" placeholder="Enter your phone number" />
        </div>
    </div>
</div>
<div class="row">
    <div class="mb-1 col-6 pl-0">
        <label class="font-bold">Choose One</label>
        <select class="select" placeholder="Choose one">
            <option>Shibe</option>
            <option>Doggo</option>
            <option>Pupper</option>
        </select>
    </div>
    <div class="mb-1 col-6 pr-0">
        <label class="font-bold label--sm">Select One <span class="required">*</span></label>
        <div class="section-body">
            <label class="radio">
                <input type="radio" name="member" /> Yes
            </label>
            <label class="radio">
                <input type="radio" name="member" /> No
            </label>
        </div>
        <span class="required info">This section is required.</span>
    </div>
</div>
<div class="mb-1">
    <label class="font-bold">Message</label>
    <textarea placeholder="Enter your message"></textarea>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Toggle', link: './toggle' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};

export default withLayout(<DefaultLayout />)(FormGroupsPage);
