import Theme from 'rspress/theme';
import NotFoundLayout from '../components/NotFoundLayout'

// 传入插槽
const Layout = () =>
  <Theme.Layout
    /* 文档内容后面 */
    afterDocContent={<a href='/blog'>cd..</a>}
  />;

export default {
  ...Theme,
  Layout,
  NotFoundLayout,
};

// 重导出其他部分
export * from 'rspress/theme';