// 时间工具：前后端时间统一为 LocalDateTime 日期字符串（yyyy-MM-dd HH:mm:ss）。
// normalizeTime 只做“空值保护 + 把空格分隔符换成 T”，使 dayjs / new Date 可以稳定解析，
// 不再兼容任何数字（毫秒/秒）时间戳。
export function normalizeTime(value: string | null | undefined): string {
    if (value == null) return '';
    const str = value.trim();
    if (str === '') return '';
    return str.replace(' ', 'T');
}
