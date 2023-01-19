'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@tiptap/extension-text-style');
var core = require('@tiptap/core');

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
//# sourceMappingURL=tiptap-extension-font-size.cjs.map
