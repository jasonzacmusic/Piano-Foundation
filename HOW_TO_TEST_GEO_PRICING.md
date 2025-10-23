# How to Test Geo-Based Pricing

## Expected Behavior

**For Indian Subcontinent visitors** (India, Nepal, Sri Lanka, Bangladesh, Pakistan, Bhutan, Maldives):
- Currency Icon: ₹ (Rupee symbol)
- Price Display: `Rs.20000 (+GST)`
- Region Label: India, Nepal, Sri Lanka, Bangladesh, Pakistan, Bhutan, Maldives

**For International visitors** (all other countries):
- Currency Icon: $ (Dollar symbol)
- Price Display: `420$`
- Region Label: All Other Countries

---

## Testing Methods

### Method 1: Using VPN (Recommended for Real Testing)

1. **Install a VPN service** (NordVPN, ExpressVPN, ProtonVPN, etc.)
2. **Test Domestic Pricing:**
   - Connect to a server in India, Nepal, or any South Asian country
   - Open the website in an incognito/private window
   - Verify you see: ₹ symbol and "Rs.20000 (+GST)"
3. **Test International Pricing:**
   - Connect to a server in USA, UK, Australia, etc.
   - Open the website in an incognito/private window
   - Verify you see: $ symbol and "420$"

### Method 2: Browser Developer Tools (Quick Testing)

1. **Open Browser DevTools** (F12 or Right-click → Inspect)
2. **Go to Console tab**
3. **Override the geo-detection by pasting this code:**

```javascript
// To test DOMESTIC pricing (Indian Subcontinent)
localStorage.setItem('test_region', 'domestic');
location.reload();

// To test INTERNATIONAL pricing
localStorage.setItem('test_region', 'international');
location.reload();

// To clear test and use real detection
localStorage.removeItem('test_region');
location.reload();
```

**Note:** You'll need to modify the frontend code to check for this localStorage value first. Add this to `client/src/pages/home.tsx`:

```javascript
// In the useEffect where geo-detection happens:
const testRegion = localStorage.getItem('test_region');
if (testRegion === 'domestic' || testRegion === 'international') {
  setUserRegion(testRegion);
  return;
}
```

### Method 3: Temporarily Hardcode for Testing

**For quick visual verification:**

1. Open `client/src/pages/home.tsx`
2. Find the line: `const [userRegion, setUserRegion] = useState<"domestic" | "international">("international");`
3. Change to: `const [userRegion, setUserRegion] = useState<"domestic" | "international">("domestic");` to test domestic pricing
4. Save and refresh the page
5. **Remember to change it back after testing!**

### Method 4: Using curl to Test API Endpoint

Test the geo-detection API directly:

```bash
# Test domestic detection (simulating India)
curl -H "x-vercel-ip-country: IN" http://localhost:5000/api/geo

# Test international detection (simulating USA)
curl -H "x-vercel-ip-country: US" http://localhost:5000/api/geo
```

---

## Production Testing

Once deployed on Replit or Vercel:

1. **Ask team members in different countries** to visit the site and report what they see
2. **Use VPN** as described in Method 1
3. **Mobile hotspot testing**: Mobile networks often have accurate geo-location headers

---

## Troubleshooting

**If pricing doesn't change:**
- Clear browser cache and cookies
- Use incognito/private browsing mode
- Check browser console for errors (F12 → Console tab)
- Verify the VPN connection is active

**If you see both $ and $420:**
- This was the old bug - it's now fixed
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

---

## Technical Details

The geo-detection works by:
1. Backend checks IP headers: `x-vercel-ip-country` or `cf-ipcountry`
2. Compares country code against domestic list: IN, NP, LK, BD, PK, BT, MV
3. Returns region: "domestic" or "international"
4. Frontend displays appropriate pricing based on region
