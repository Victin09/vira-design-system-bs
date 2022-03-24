import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { KeyMap, GlobalHotKeys } from 'react-hotkeys';

import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { Footer } from '../components/footer';

export const DefaultLayout = ({ children, ...rest }: any) => {
    const keyMap: KeyMap = {
        SEARCH_FOCUS: {
            sequence: 'shift+s',
            action: 'keydown',
        },
    };

    const keyHandlers = {
        SEARCH_FOCUS: React.useCallback((e) => {
            if (document.querySelector('#vds-search')) {
                e.preventDefault();
                (document.querySelector('#vds-search') as HTMLInputElement).focus();
                (document.querySelector('#vds-search') as HTMLInputElement).value = '';
            }
        }, []),
    };

    return (
        <GlobalHotKeys keyMap={keyMap} handlers={keyHandlers}>
            <Header extraClasses="header--docs-theme" />
            <div className="default-layout tree-nav-body mx-auto mb-0">
                <div className="tree-nav-header u-items-center">
                    <a href="#sidebar" className="u-shadow-none">
                        <span className="icon">
                            <FontAwesomeIcon className="fa-wrapper small" icon={['fas', 'chevron-right']} />
                        </span>
                    </a>
                </div>
                <div className="sidebar-container tree-nav p-0 mr-2" id="sidebar">
                    <div className="sidebar-wrapper">
                        <Sidebar {...rest} />
                    </div>
                </div>
                <a
                    href="#nonexistent-div"
                    id="sidebar-close"
                    className="tree-nav-close p-0 u-shadow-none"
                    style={{
                        boxShadow: 'none',
                    }}
                ></a>
                <div
                    className="tree-nav-container h-auto"
                    style={{
                        flexGrow: 1,
                    }}
                >
                    {children}
                </div>
            </div>
            <Footer />
            <script
                type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
            ></script>
        </GlobalHotKeys>
    );
};
