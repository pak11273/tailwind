import React from 'react'

class Layout extends React.PureComponent {
    render() {
        return (
            <div
                style={{
                    textAlign: 'center',
                    margin: '0 auto',
                    fontSize: '2rem',
                    height: '100%'
                }}
            >
                <section className="flex flex-col h-full p-8 bg-gray-300 pb-30">
                    <header className="mb-4">
                        <button
                            type="button"
                            className="w-full px-4 py-3 text-center text-white shadow bg-primary-500 hover:text-white-500 js-download transition-normal"
                        >
                            Generate HTML
                        </button>
                    </header>
                    <div className="flex flex-col h-full bg-gray-100 border border-gray-300 js-droppable"></div>
                    <div className="fixed hidden px-4 py-2 bg-white shadow js-delete-btn">
                        Delete{' '}
                        <i className="pointer-events-none far fa-trash-alt"></i>
                    </div>
                </section>
            </div>
        )
    }
}

export default Layout
