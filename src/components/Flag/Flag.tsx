import { CSSProperties } from 'react';

interface FlagProps {
  code: string;
  title: string;
  style?: CSSProperties;
}

const Flag = ({ code, title, ...attributes }: FlagProps) => {
  switch (code) {
    case 'AC':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇨
        </span>
      );
    case 'AD':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇩
        </span>
      );
    case 'AE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇪
        </span>
      );
    case 'AF':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇫
        </span>
      );
    case 'AG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇬
        </span>
      );
    case 'AI':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇮
        </span>
      );
    case 'AL':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇱
        </span>
      );
    case 'AM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇲
        </span>
      );
    case 'AO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇴
        </span>
      );
    case 'AQ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇶
        </span>
      );
    case 'AR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇷
        </span>
      );
    case 'AS':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇸
        </span>
      );
    case 'AT':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇹
        </span>
      );
    case 'AU':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇺
        </span>
      );
    case 'AW':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇼
        </span>
      );
    case 'AX':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇽
        </span>
      );
    case 'AZ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇦🇿
        </span>
      );
    case 'BA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇦
        </span>
      );
    case 'BB':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇧
        </span>
      );
    case 'BD':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇩
        </span>
      );
    case 'BE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇪
        </span>
      );
    case 'BF':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇫
        </span>
      );
    case 'BG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇬
        </span>
      );
    case 'BH':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇭
        </span>
      );
    case 'BI':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇮
        </span>
      );
    case 'BJ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇯
        </span>
      );
    case 'BL':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇱
        </span>
      );
    case 'BM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇲
        </span>
      );
    case 'BN':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇳
        </span>
      );
    case 'BO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇴
        </span>
      );
    case 'BQ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇶
        </span>
      );
    case 'BR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇷
        </span>
      );
    case 'BS':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇸
        </span>
      );
    case 'BT':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇹
        </span>
      );
    case 'BV':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇻
        </span>
      );
    case 'BW':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇼
        </span>
      );
    case 'BY':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇾
        </span>
      );
    case 'BZ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇧🇿
        </span>
      );
    case 'CA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇦
        </span>
      );
    case 'CC':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇨
        </span>
      );
    case 'CD':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇩
        </span>
      );
    case 'CF':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇫
        </span>
      );
    case 'CG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇬
        </span>
      );
    case 'CH':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇭
        </span>
      );
    case 'CI':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇮
        </span>
      );
    case 'CK':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇰
        </span>
      );
    case 'CL':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇱
        </span>
      );
    case 'CM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇲
        </span>
      );
    case 'CN':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇳
        </span>
      );
    case 'CO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇴
        </span>
      );
    case 'CR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇷
        </span>
      );
    case 'CU':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇺
        </span>
      );
    case 'CV':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇻
        </span>
      );
    case 'CW':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇼
        </span>
      );
    case 'CX':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇽
        </span>
      );
    case 'CY':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇾
        </span>
      );
    case 'CZ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇨🇿
        </span>
      );
    case 'DE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇩🇪
        </span>
      );
    case 'DJ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇩🇯
        </span>
      );
    case 'DK':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇩🇰
        </span>
      );
    case 'DM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇩🇲
        </span>
      );
    case 'DO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇩🇴
        </span>
      );
    case 'DZ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇩🇿
        </span>
      );
    case 'EC':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇪🇨
        </span>
      );
    case 'EE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇪🇪
        </span>
      );
    case 'EG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇪🇬
        </span>
      );
    case 'EH':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇪🇭
        </span>
      );
    case 'ER':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇪🇷
        </span>
      );
    case 'ES':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇪🇸
        </span>
      );
    case 'ET':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇪🇹
        </span>
      );
    case 'FI':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇫🇮
        </span>
      );
    case 'FJ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇫🇯
        </span>
      );
    case 'FK':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇫🇰
        </span>
      );
    case 'FM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇫🇲
        </span>
      );
    case 'FO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇫🇴
        </span>
      );
    case 'FR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇫🇷
        </span>
      );
    case 'GA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇦
        </span>
      );
    case 'GB':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇧
        </span>
      );
    case 'GD':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇩
        </span>
      );
    case 'GE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇪
        </span>
      );
    case 'GF':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇫
        </span>
      );
    case 'GG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇬
        </span>
      );
    case 'GH':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇭
        </span>
      );
    case 'GI':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇮
        </span>
      );
    case 'GL':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇱
        </span>
      );
    case 'GM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇲
        </span>
      );
    case 'GN':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇳
        </span>
      );
    case 'GP':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇵
        </span>
      );
    case 'GQ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇶
        </span>
      );
    case 'GR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇷
        </span>
      );
    case 'GS':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇸
        </span>
      );
    case 'GT':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇹
        </span>
      );
    case 'GU':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇺
        </span>
      );
    case 'GW':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇼
        </span>
      );
    case 'GY':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇬🇾
        </span>
      );
    case 'HK':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇭🇰
        </span>
      );
    case 'HM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇭🇲
        </span>
      );
    case 'HN':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇭🇳
        </span>
      );
    case 'HR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇭🇷
        </span>
      );
    case 'HT':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇭🇹
        </span>
      );
    case 'HU':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇭🇺
        </span>
      );
    case 'ID':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇮🇩
        </span>
      );
    case 'IE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇮🇪
        </span>
      );
    case 'IL':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇮🇱
        </span>
      );
    case 'IM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇮🇲
        </span>
      );
    case 'IN':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇮🇳
        </span>
      );
    case 'IO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇮🇴
        </span>
      );
    case 'IQ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇮🇶
        </span>
      );
    case 'IR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇮🇷
        </span>
      );
    case 'IS':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇮🇸
        </span>
      );
    case 'IT':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇮🇹
        </span>
      );
    case 'JE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇯🇪
        </span>
      );
    case 'JM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇯🇲
        </span>
      );
    case 'JO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇯🇴
        </span>
      );
    case 'JP':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇯🇵
        </span>
      );
    case 'KE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇰🇪
        </span>
      );
    case 'KG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇰🇬
        </span>
      );
    case 'KH':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇰🇭
        </span>
      );
    case 'KI':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇰🇮
        </span>
      );
    case 'KM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇰🇲
        </span>
      );
    case 'KN':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇰🇳
        </span>
      );
    case 'KP':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇰🇵
        </span>
      );
    case 'KR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇰🇷
        </span>
      );
    case 'KW':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇰🇼
        </span>
      );
    case 'KY':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇰🇾
        </span>
      );
    case 'KZ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇰🇿
        </span>
      );
    case 'LA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇱🇦
        </span>
      );
    case 'LB':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇱🇧
        </span>
      );
    case 'LC':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇱🇨
        </span>
      );
    case 'LI':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇱🇮
        </span>
      );
    case 'LK':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇱🇰
        </span>
      );
    case 'LR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇱🇷
        </span>
      );
    case 'LS':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇱🇸
        </span>
      );
    case 'LT':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇱🇹
        </span>
      );
    case 'LU':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇱🇺
        </span>
      );
    case 'LV':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇱🇻
        </span>
      );
    case 'LY':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇱🇾
        </span>
      );
    case 'MA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇦
        </span>
      );
    case 'MC':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇨
        </span>
      );
    case 'MD':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇩
        </span>
      );
    case 'ME':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇪
        </span>
      );
    case 'MG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇬
        </span>
      );
    case 'MH':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇭
        </span>
      );
    case 'MK':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇰
        </span>
      );
    case 'ML':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇱
        </span>
      );
    case 'MM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇲
        </span>
      );
    case 'MN':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇳
        </span>
      );
    case 'MO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇴
        </span>
      );
    case 'MP':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇵
        </span>
      );
    case 'MQ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇶
        </span>
      );
    case 'MR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇷
        </span>
      );
    case 'MS':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇸
        </span>
      );
    case 'MT':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇹
        </span>
      );
    case 'MU':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇺
        </span>
      );
    case 'MV':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇻
        </span>
      );
    case 'MW':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇼
        </span>
      );
    case 'MX':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇽
        </span>
      );
    case 'MY':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇾
        </span>
      );
    case 'MZ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇲🇿
        </span>
      );
    case 'NA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇦
        </span>
      );
    case 'NC':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇨
        </span>
      );
    case 'NE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇪
        </span>
      );
    case 'NF':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇫
        </span>
      );
    case 'NG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇬
        </span>
      );
    case 'NI':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇮
        </span>
      );
    case 'NL':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇱
        </span>
      );
    case 'NO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇴
        </span>
      );
    case 'NP':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇵
        </span>
      );
    case 'NR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇷
        </span>
      );
    case 'NU':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇺
        </span>
      );
    case 'NZ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇳🇿
        </span>
      );
    case 'OM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇴🇲
        </span>
      );
    case 'PA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇦
        </span>
      );
    case 'PE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇪
        </span>
      );
    case 'PF':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇫
        </span>
      );
    case 'PG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇬
        </span>
      );
    case 'PH':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇭
        </span>
      );
    case 'PK':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇰
        </span>
      );
    case 'PL':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇱
        </span>
      );
    case 'PM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇲
        </span>
      );
    case 'PN':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇳
        </span>
      );
    case 'PR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇷
        </span>
      );
    case 'PS':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇸
        </span>
      );
    case 'PT':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇹
        </span>
      );
    case 'PW':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇼
        </span>
      );
    case 'PY':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇵🇾
        </span>
      );
    case 'QA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇶🇦
        </span>
      );
    case 'RE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇷🇪
        </span>
      );
    case 'RO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇷🇴
        </span>
      );
    case 'RS':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇷🇸
        </span>
      );
    case 'RU':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇷🇺
        </span>
      );
    case 'RW':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇷🇼
        </span>
      );
    case 'SA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇦
        </span>
      );
    case 'SB':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇧
        </span>
      );
    case 'SC':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇨
        </span>
      );
    case 'SD':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇩
        </span>
      );
    case 'SE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇪
        </span>
      );
    case 'SG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇬
        </span>
      );
    case 'SH':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇭
        </span>
      );
    case 'SI':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇮
        </span>
      );
    case 'SK':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇰
        </span>
      );
    case 'SL':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇱
        </span>
      );
    case 'SM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇲
        </span>
      );
    case 'SN':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇳
        </span>
      );
    case 'SO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇴
        </span>
      );
    case 'SR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇷
        </span>
      );
    case 'SS':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇸
        </span>
      );
    case 'ST':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇹
        </span>
      );
    case 'SV':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇻
        </span>
      );
    case 'SX':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇽
        </span>
      );
    case 'SY':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇾
        </span>
      );
    case 'SZ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇸🇿
        </span>
      );
    case 'TA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇦
        </span>
      );
    case 'TC':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇨
        </span>
      );
    case 'TD':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇩
        </span>
      );
    case 'TF':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇫
        </span>
      );
    case 'TG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇬
        </span>
      );
    case 'TH':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇭
        </span>
      );
    case 'TJ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇯
        </span>
      );
    case 'TK':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇰
        </span>
      );
    case 'TL':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇱
        </span>
      );
    case 'TM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇲
        </span>
      );
    case 'TN':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇳
        </span>
      );
    case 'TO':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇴
        </span>
      );
    case 'TR':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇷
        </span>
      );
    case 'TT':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇹
        </span>
      );
    case 'TV':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇻
        </span>
      );
    case 'TW':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇼
        </span>
      );
    case 'TZ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇹🇿
        </span>
      );
    case 'UA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇺🇦
        </span>
      );
    case 'UG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇺🇬
        </span>
      );
    case 'UM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇺🇲
        </span>
      );
    case 'US':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇺🇸
        </span>
      );
    case 'UY':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇺🇾
        </span>
      );
    case 'UZ':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇺🇿
        </span>
      );
    case 'VA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇻🇦
        </span>
      );
    case 'VC':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇻🇨
        </span>
      );
    case 'VE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇻🇪
        </span>
      );
    case 'VG':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇻🇬
        </span>
      );
    case 'VI':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇻🇮
        </span>
      );
    case 'VN':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇻🇳
        </span>
      );
    case 'VU':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇻🇺
        </span>
      );
    case 'WF':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇼🇫
        </span>
      );
    case 'WS':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇼🇸
        </span>
      );
    case 'XK':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇽🇰
        </span>
      );
    case 'YE':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇾🇪
        </span>
      );
    case 'YT':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇾🇹
        </span>
      );
    case 'ZA':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇿🇦
        </span>
      );
    case 'ZM':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇿🇲
        </span>
      );
    case 'ZW':
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🇿🇼
        </span>
      );
    default:
      return (
        <span title={title} role="img" aria-label={title} {...attributes}>
          🏴‍☠️
        </span>
      );
  }
};

export default Flag;
