<template>
    <div id="Notes_ToDo">
        <el-tiptap
                v-model="content"
                :extensions="extensions"
                :spellcheck="true"
                class="富文本编辑器"/>
    </div>
</template>

<script>
import {
    Bold,
    BulletList,
    CodeBlock,
    Doc,
    FontSize,
    Heading,
    Indent,
    Italic,
    ListItem,
    OrderedList,
    Paragraph,
    Strike,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    Text,
    TextAlign,
    TextColor,
    TodoItem,
    TodoList,
    Underline
} from 'element-tiptap';

export default {
    name: "Notes_ToDo",
    data() {
        return {
            // 按照罗列的顺序被添加到菜单栏和气泡菜单中
            extensions: [
                new Doc(),
                new Text(),
                new Paragraph(),

                new Heading({level: 6}),
                new TextColor({
                    colors: [
                        '#f44336',
                        '#e91e63',
                        '#9c27b0',
                        '#673ab7',
                        '#3f51b5',
                        '#2196f3',
                        '#03a9f4',
                        '#00bcd4',
                        '#009688',
                        '#4caf50',
                        '#8bc34a',
                        '#cddc39',
                        '#ffeb3b',
                        '#ffc107',
                        '#ff9800',
                        '#ff5722',
                        '#000000',]
                }),
                new Bold({bubble: true}), // 在气泡菜单中渲染菜单按钮
                new Italic(),
                new Strike(),
                new FontSize({fontSizes: ['8', '10', '12', '14', '16', '18', '20', '24', '30', '36', '48', '60', '72']}),
                new Underline({bubble: true, menubar: false, TextColor: false}), // 在气泡菜单而不在菜单栏中渲染菜单按钮
                new CodeBlock(),
                //位置
                new Indent({minIndent: 0, maxIndent: 7,}),
                new TextAlign({alignments: ['left', 'center', 'right'],}),
                new ListItem(),
                new BulletList(),
                new OrderedList(),
                new Table({
                    resizable: true
                }),
                //表格
                new TableHeader(),
                new TableRow(),
                new TableCell(),
                //待办
                new TodoList(),
                new TodoItem()
            ],
            // 编辑器的内容
            content: `<h1># 支持MD格式文档，富文本编辑器!</h1>
                       <label>
                        * 🎨使用 element-ui 组件<p></p>
                        * 💅开箱即用<p></p>
                        * 🔖支持 markdown 语法<p></p>
                        * 📘TypeScript 支持<p></p>
                        * 💻也可以通过直接控制编辑器的行为来定制编辑器。<p></p>
                        * 🌝欢迎你的使用 </label>`,
        };
    },
}
</script>

<style scoped>
#Notes_ToDo {

}

.富文本编辑器 {
    height: 700px;
}
</style>