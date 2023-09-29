/// <reference types="cypress" />
namespace Cypress {
  interface Chainable {
    visitPage(path: string, options?: Record<string, any>);
    interceptGet(
      path: string,
      body?: unknown[] | Record<string, unknown>,
      options?: Record<string, unknown>
    ): Chainable;
    interceptPost(
      path: string,
      body?: unknown[] | Record<string, unknown>,
      options?: Record<string, unknown>
    ): Chainable;
    interceptPut(
      path: string,
      body?: unknown[] | Record<string, unknown>,
      options?: Record<string, unknown>
    ): Chainable;
    interceptDelete(
      path: string,
      body?: unknown[] | Record<string, unknown>,
      options?: Record<string, unknown>
    ): Chainable;
    interceptGetFixture(path: string, fixture: string, options?: unknown[] | Record<string, unknown>): Chainable;
    interceptPostFixture(path: string, fixture: string, options?: unknown[] | Record<string, unknown>): Chainable;
    interceptDeleteFixture(path: string, fixture: string, options?: unknown[] | Record<string, unknown>): Chainable;
    getButtonWithText(text: string): Chainable;
    getElementOfTagWithText(tag: string, text: string): Chainable;
    getElementWithText(text: string): Chainable;
    setItem(key: string, value: string): Chainable;
    removeItem(key: string): Chainable;
    setJson(key: string, value: Record<string, any>): Chainable;
    getChatInput(): Chainable;
    mockLogin(): Chainable;
    disableSmoothScroll(): Chainable;
  }
}
