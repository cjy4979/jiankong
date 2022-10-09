//import { useIntl } from 'umi';
import { YuqueOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';


const Footer: React.FC = () => {
  //const intl = useIntl();
  const defaultMes = "合肥工业大学工程力学系出品"

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMes}`}
      links={[
        {
          key: 'Hefei University of Technology',
          title: '合肥工业大学',
          href: 'http://www.hfut.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'yuque',
          title: <YuqueOutlined />,
          href: 'https://www.yuque.com/chenjiyu/evcbo9/zry45l',
          blankTarget: true,
        },
        {
          key: 'Engineering Mechanics',
          title: '工程力学系',
          href: 'http://em.hfut.edu.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
