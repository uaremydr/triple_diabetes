declare class md5 {
    constructor();
    private hexcase;
    private b64pad;
    hex_md5(s: any): string;
    private b64_md5(s);
    private any_md5(s, e);
    private hex_hmac_md5(k, d);
    private b64_hmac_md5(k, d);
    private any_hmac_md5(k, d, e);
    private md5_vm_test();
    private rstr_md5(s);
    private rstr_hmac_md5(key, data);
    private rstr2hex(input);
    private rstr2b64(input);
    private rstr2any(input, encoding);
    private str2rstr_utf8(input);
    private str2rstr_utf16le(input);
    private str2rstr_utf16be(input);
    private rstr2binl(input);
    private binl2rstr(input);
    private binl_md5(x, len);
    private md5_cmn(q, a, b, x, s, t);
    private md5_ff(a, b, c, d, x, s, t);
    private md5_gg(a, b, c, d, x, s, t);
    private md5_hh(a, b, c, d, x, s, t);
    private md5_ii(a, b, c, d, x, s, t);
    private safe_add(x, y);
    private bit_rol(num, cnt);
}
