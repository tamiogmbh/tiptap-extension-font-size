(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tiptap/extension-text-style'), require('@tiptap/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tiptap/extension-text-style', '@tiptap/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["@tiptap/extension-font-size"] = {}, null, global.core));
})(this, (function (exports, extensionTextStyle, core) { 'use strict';

  const FontSize = core.Extension.create({
    name: "font-size",
    addOptions() {
      return {
        types: ["textStyle"]
      };
    },
    addGlobalAttributes() {
      return [
        {
          types: this.options.types,
          attributes: {
            fontSize: {
              default: null,
              parseHTML: (element) => {
                var _a;
                return (_a = element.style.fontSize) == null ? void 0 : _a.replace(/['"]+/g, "");
              },
              renderHTML: (attributes) => {
                if (!attributes.fontSize) {
                  return {};
                }
                return {
                  style: `font-size: ${attributes.fontSize}px`
                };
              }
            }
          }
        }
      ];
    },
    addCommands() {
      return {
        setFontSize: (fontSize) => ({ chain }) => {
          return chain().setMark("textStyle", { fontSize }).run();
        },
        unsetFontSize: () => ({ chain }) => {
          return chain().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run();
        }
      };
    }
  });

  exports.FontSize = FontSize;
  exports["default"] = FontSize;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tiptap-extension-font-size.umd.cjs.map
